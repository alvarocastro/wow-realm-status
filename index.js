const request = require('request-promise-native');

const apiFetch = function (input) {
	return request.post({
		headers: {
			'content-type': 'application/json'
		},
		url: 'https://worldofwarcraft.com/graphql',
		body: {
			operationName: 'GetInitialRealmStatusData',
			variables: {
				input
			},
			extensions: {
				persistedQuery: {
					version: 1,
					sha256Hash: '9c7cc66367037fda3007b7f592201c2610edb2c9a9292975cd131a37bbe61930'
				}
			}
		},
		json: true
	});
};

const fetchRealms = async function (region, classic = false) {
	const compoundRegionGameVersionSlug = `${classic ? 'classic-' : ''}${region}`;
	const {data} = await apiFetch({compoundRegionGameVersionSlug});
	const realmsRaw = data.Realms;

	return realmsRaw.map(realm => {
		let population = realm.population.slug;

		if (population === 'recomended') {
			population = 'very-low';
		}

		return {
			name: realm.name,
			slug: realm.slug,
			locale: realm.locale,
			timezone: realm.timezone,
			online: realm.online,
			type: realm.type.slug,
			population
		};
	});
};

const fetchRealm = async function (region, realm, classic = false) {
	const realms = await fetchRealms(region, classic);

	return realms.find(r => {
		return [r.name, r.slug].includes(realm.toLowerCase());
	});
};

module.exports = {
	fetchRealms,
	fetchRealm
};

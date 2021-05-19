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

const makeRegionGameVersionSlug = function (region, version = 'retail') {
	if (version === 'classic') {
		return `classic-${region}`;
	}
	if (version === 'bc') {
		return `bcc-${region}`;
	}
	return region;
};

const fetchRealms = async function (region, version = 'retail') {
	const compoundRegionGameVersionSlug = makeRegionGameVersionSlug(region, version);
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

const fetchRealm = async function (region, realm, version = 'retail') {
	const realms = await fetchRealms(region, version);

	return realms.find(r => {
		return [r.name, r.slug].includes(realm.toLowerCase());
	});
};

module.exports = {
	fetchRealms,
	fetchRealm
};

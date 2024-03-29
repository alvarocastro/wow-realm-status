# wow-realm-status
[![NPM](https://img.shields.io/npm/v/wow-realm-status.svg)](https://www.npmjs.com/package/wow-realm-status)
[![Maintainability](https://api.codeclimate.com/v1/badges/753c087f0d8331aa962c/maintainability)](https://codeclimate.com/github/alvarocastro/wow-realm-status/maintainability)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Easily fetch info about the World of Warcraft realms.

- [Install](#install)
- [Usage](#usage)
- [Realm data](#realm-data)
- [Contributing](#contributing)
- [Support](#support)
- [Related](#related)

## Install

```bash
npm install wow-realm-status
```

## Usage

```js
const {fetchRealm} = require('wow-realm-status');

fetchRealm('us', 'ragnaros')
	.then(realm => console.log(realm));
//=> {
//  name: 'Ragnaros',
//  slug: 'ragnaros',
//  locale: 'es-MX',
//  timezone: 'CDT',
//  online: true,
//  type: 'normal',
//  population: 'full'
//}
```

### fetchRealm(region, realm[, version="retail"])

Returns a JSON object containing the realm data.

#### region

Type: `string`

#### realm

Type: `string`

#### classic

Type: `boolean`<br>
Default: `"retail"`

### fetchRealms(region[, version])

Returns an array of JSON objects with the realms for that region.

#### region

Type: `string`

#### version

To specify the game version to fetch.

Type: `string`<br>
Supported values: `"retail"`, `"classic"`, `"bc"`<br>
Default: `"retail"`

## Realm data

Each realm is represented as a JSON object with the following properties:

#### name

Type: `string`

#### slug

Type: `string`

#### locale

Type: `string`

Locale of the realm, formatted as a [`IETF BCP 47` language tag](https://en.wikipedia.org/wiki/IETF_language_tag).

#### timezone

Type: `string`

#### online

Type: `boolean`

#### type

Type: `string`

Possible values are: `normal`, `pvp`, `rp`, `rppvp`.

#### population

Type: `string`

Current population of the realm.<br>
Possible values are: `very-low`, `low`, `medium`, `high`, `full`

## Contributing

Contributions are always welcome! Please run `npm test` before hand to ensure everything is ok.

## Support

If you use this package please consider starring it :)

## Related

* [wow-realm-status-cli](https://github.com/alvarocastro/wow-realm-status-cli) - CLI version of this library.

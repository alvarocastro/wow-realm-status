# wow-realm-status
[![NPM](https://img.shields.io/npm/v/wow-realm-status.svg)](https://www.npmjs.com/package/wow-realm-status)
[![Build Status](https://travis-ci.com/alvarocastro/wow-realm-status.svg?branch=master)](https://travis-ci.com/alvarocastro/wow-realm-status)
[![codebeat badge](https://codebeat.co/badges/d83c4838-f459-41d3-925e-dca6d0e6b254)](https://codebeat.co/projects/github-com-alvarocastro-wow-realm-status-master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Easily fetch info about the World of Warcraft realms.

- [Install](#install)
- [Usage](#usage)
- [Realm data](#realm-data)
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

### fetchRealm(region, realm[, classic])

Returns a JSON object containing the realm data.

#### region

Type: `string`

#### realm

Type: `string`

#### classic

Type: `boolean`<br>
Default: `false`

### fetchRealms(region[, classic])

Returns an array of JSON objects with the realms for that region.

#### region

Type: `string`

#### classic

Type: `boolean`<br>
Default: `false`

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

## Related

* [wow-realm-status-cli](https://github.com/alvarocastro/wow-realm-status-cli) - CLI version of this library.

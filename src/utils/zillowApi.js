const Zillow = require('node-zillow')
const config = require('../configuration/configuration');

const zwsid = config.zwsid;
console.log(zwsid)

const zillow = new Zillow(zwsid);

console.log('zillow in api')
console.log(zillow)

module.exports = { zillow }
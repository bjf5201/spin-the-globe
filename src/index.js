var random = require('unique-random-array');
var countries = require('./countries.json');

module.exports = {
  all: countries,
  random: unique(countries.countries)
};
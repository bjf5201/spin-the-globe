import uniqueRandomArray from "unique-random-array";
import countries from "./countries.json" with { type: "json"};
import buildRandomArr from "./buildRandomArr.js";

const mainExport = {
  all: countries.countries,
  random: uniqueRandomArray(countries.countries),
  build: buildRandomArr
};


export default mainExport;
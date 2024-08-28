"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _uniqueRandomArray = _interopRequireDefault(require("unique-random-array"));
var _countries = _interopRequireDefault(require("./countries.json"));
var getRandomEl = (0, _uniqueRandomArray.default)(_countries.default.countries);
const buildRandomArr = number => {
  if (number === undefined) {
    return getRandomEl();
  } else {
    var randomArr = [];
    for (var i = 0; i < number; i++) {
      randomArr.push(getRandomEl());
    }
    return randomArr;
  }
};
var _default = exports.default = buildRandomArr;
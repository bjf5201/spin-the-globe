"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _uniqueRandomArray = _interopRequireDefault(require("unique-random-array"));
var _countries = _interopRequireDefault(require("./countries.json"));
var _buildRandomArr = _interopRequireDefault(require("./buildRandomArr.js"));
const mainExport = {
  all: _countries.default.countries,
  random: (0, _uniqueRandomArray.default)(_countries.default.countries),
  build: _buildRandomArr.default
};
var _default = exports.default = mainExport;
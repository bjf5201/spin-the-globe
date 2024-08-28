# Spin the Globe

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/bjf5201/spin-the-globe/release.yml?color=%23da7eb4)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

![Codecov (with branch)](https://img.shields.io/codecov/c/github/bjf5201/spin-the-globe/main?style=flat&color=%23da7eb4)

![NPM Version](https://img.shields.io/npm/v/spin-the-globe?style=flat&color=%23da7eb4)

![NPM Downloads](https://img.shields.io/npm/dy/spin-the-globe?color=%23da7eb4)

![GitHub contributors](https://img.shields.io/github/contributors/bjf5201/spin-the-globe?style=flat&color=%23da7eb4)

Create a random array of countries without repeated entries.

## Installation

```bash
npm install spin-the-globe
```

## Usage

```javascript
var spin = require('spin-the-globe');

console.log(spin.all);
/* Displays the entire list of countries in alphabetical order */

console.log(spin.random());
/* Displays a random country */

console.log(spin.build(3));
/* Creates and displayes an array of 3 random countries with no repeats */

console.log(spin.build());
/* Creates and displays an array of a single random country */
/* (Similar to spin.random() ) */

console.log(spin.build(1));
/* Same thing as console.log(spin.build()) */

console.log(spin.build(all));
/* Randomizes the list of spin.all() */
```

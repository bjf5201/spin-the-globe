# Spin the Globe

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Playing with NPM JavaScript libraries.

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

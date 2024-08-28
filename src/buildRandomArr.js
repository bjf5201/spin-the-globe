import uniqueRandomArray from "unique-random-array";
import countries from "./countries.json" with { type: "json"};

var getRandomEl = uniqueRandomArray(countries.countries);

const buildRandomArr = (number) => {
  if (number === undefined) {
    return getRandomEl();
  } else {
    var randomArr = [];
    for (var i = 0; i < number; i++) {
      randomArr.push(getRandomEl());
    }
    return randomArr;
  }
}

export default buildRandomArr;
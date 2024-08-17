import { expect } from 'chai';
import spin from './index.js';

describe("spin-the-globe", () => {
  describe("all", () => {
    it("should be an array of strings", () => {
      expect(spin.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every((item) => {
          return typeof item === "string";
        });
      };
    });

    it("should contain 'Croatia'", () => {
      expect(spin.all).to.include("Croatia");
    });
  });

  describe("random", () => {
    it("should return a random item from the countries", () => {
      var randomItem = spin.random();
      expect(spin.all).to.include(randomItem);
    });
  });

  describe("build", () => {
    it("should return an array of random items if passed a number", () => {
      var randomItems = spin.build(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach((item) => {
        expect(spin.all).to.include(item);
      });
    });

    it("should return an array of all items if passed the length of the array", () => {
      var allItems = spin.build(spin.all.length);
      expect(allItems).to.have.length(spin.all.length);
    });

    it("should return a single random item if passed no arguments", () => {
      var randomItem = spin.build();
      expect(spin.all).to.include(randomItem);
    });
  });
});
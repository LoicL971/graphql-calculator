import { gql } from 'apollo-server';
// const { gql } = require('apollo-server');

const MAX_NUMBER = 10000

function numberToWords(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number === 0) {
    return 'zero'
  }
  if (number < 20) {
    return ones[number];
  }
  if (number < 100) {
    return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + ones[number % 10] : '');
  }
  if (number < 1000) {
    return ones[Math.floor(number / 100)] + ' hundred' + (number % 100 !== 0 ? ' and ' + numberToWords(number % 100) : '');
  }
  if (number < 1000000) {
    return numberToWords(Math.floor(number / 1000)) + ' thousand' + (number % 1000 !== 0 ? ' ' + numberToWords(number % 1000) : '');
  }
  if (number < 1000000000) {
    return numberToWords(Math.floor(number / 1000000)) + ' million' + (number % 1000000 !== 0 ? ' ' + numberToWords(number % 1000000) : '');
  }
  return numberToWords(Math.floor(number / 1000000000)) + ' billion' + (number % 1000000000 !== 0 ? ' ' + numberToWords(number % 1000000000) : '');
}

export let wordToNumber = {};
let numbers = '';
for (let i = 0; i < MAX_NUMBER; i++) {
  let word = numberToWords(i).split(' ').map((element, index) => {
    if (index === 0) {
      return element;
    }
    else {
      return element.charAt(0).toUpperCase() + element.slice(1);
    }
  }).join('');
  wordToNumber[word] = i;
  numbers = numbers + word + ': Number \n';
}
export const typeDefs = `
  type Query {
    calculate: Symbol
  }

  type Number {
    add: Symbol
    minus: Symbol
    multiply: Symbol
    divide: Symbol
    result: Int
  }
  type Symbol {` + numbers + '}';


// module.exports = typeDefs;
module.exports = function toReadable (number) {

  let numReading = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let numTenthReading = ['ten', 'tventy', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty'];
  let numRankReasing = ['hundred', 'thousand', 'million', 'billion'];
  let reading = '';
  let thousands = 0;
  let millions = 0;
  let billions = 0;
  let thousandString = '';
  let millionString = '';
  let billionString = '';

  if (number === undefined) return '';

  if (number < 20) return numReading[number];

  if (number < 100) {
    return `${numTenthReading[Math.floor(number/10)]} ${numReasing[(number % 10)]}`
  }

  if (number < 1000) {
    return `${numReasing[Math.floor(number/100)]} hundred ${numTenthReading[Math.floor(number/10)]} ${numReasing[(number % 10)]}`
  }

  if (number < 100000) {
    thousands = number / 1000;
    thousandString = `${numTenthReading[Math.floor(thousands/10)]} ${numReasing[(thousands % 10)]}`
    return `${thousandString} thousand ${numReasing[Math.floor(number/100)]} hundred ${numTenthReading[Math.floor(number/10)]} ${numReasing[(number % 10)]}`
  }
}

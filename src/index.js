module.exports = function toReadable (number) {

  let numReading = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let numTenthReading = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numRankReading = ['hundred', 'thousand', 'million', 'billion'];
  let thousands = 0;
  let tens = 0;
  let hundreds = 0;
  let thousandString = '';
  let tensString = '';
  let hundredString = '';

  function turnTensToString(hundreds) {
    if (hundreds === 0 || hundreds % 100 === 0 ) return '';
    tens = hundreds>100 ? hundreds % 100 : hundreds;
    tensString = tens < 20 ? numReading[tens] :
      numTenthReading[Math.floor(tens/10)] + ((tens % 10) > 0 ?
       ' ' + numReading[(tens % 10)] : '');
    return tensString;
  }

  if (number === 0) return 'zero';

  if (number < 20) return numReading[number];

  if (number < 100) {
    return turnTensToString(number);
  }

  if (number < 1000) {
    tensString = turnTensToString(number);
    tensString = tensString === '' ? '' : ' ' + tensString;
    hundredString = `${numReading[Math.floor(number/100)]} hundred`
    return hundredString + tensString
  }

  if (number < 1000000) {
    thousands = Math.floor(number / 1000);
    thousandString = `${numReading[Math.floor(thousands/100)]} hundred ${turnTensToString(thousands)} thousand `;
    hundreds = number % 1000;
    hundredString = `${numReading[Math.floor(hundreds/100)]} hundred ${turnTensToString(hundreds)}`;
    return thousandString + hundredString;
  }
}

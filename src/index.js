const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let arr = [];
  let result = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    arr.push(expr.slice(i, i + 10))
  }
  arr.forEach(item => {
    if (item === '**********') result.push(' ');
    let newItem = '';
    for (let i = 0; i < item.length; i = i + 2) {
      switch(item.slice(i, i + 2)) {
        case '00':
          newItem += '';
          break;
        case '10':
          newItem += '.';
          break;
        case '11':
          newItem += '-';
          break;
      }
    }
    result.push(newItem);
  })
  return result.map(item => item === ' ' ? ' ' : MORSE_TABLE[item]).join('');
}

module.exports = {
  decode
}
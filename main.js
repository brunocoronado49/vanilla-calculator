// Operations
const back = document.querySelector('#back');
const calculation = document.querySelector('#calculationText');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const result = document.querySelector('#resultText');

// Numbers
const eight = document.querySelector('#eight');
const five = document.querySelector('#five');
const four = document.querySelector('#four');
const nine = document.querySelector('#nine');
const one = document.querySelector('#one');
const seven = document.querySelector('#seven');
const six = document.querySelector('#six');
const three = document.querySelector('#three');
const two = document.querySelector('#two');
const zero = document.querySelector('#zero');

// Math
const div = document.querySelector('#div');
const dot = document.querySelector('#dot');
const mult = document.querySelector('#mult');
const plus = document.querySelector('#plus');
const rest = document.querySelector('#rest');

const insert = (num) => {
  console.log(num);
  calculation.textContent += num;
}

one.addEventListener('click', () => {
  insert(1);
});

two.addEventListener('click', () => {
  insert(2);
});

three.addEventListener('click', () => {
  insert(3);
});

four.addEventListener('click', () => {
  insert(4);
});

five.addEventListener('click', () => {
  insert(5);
});

six.addEventListener('click', () => {
  insert(6);
});

seven.addEventListener('click', () => {
  insert(7);
});

eight.addEventListener('click', () => {
  insert(8);
});

nine.addEventListener('click', () => {
  insert(9);
});

zero.addEventListener('click', () => {
  insert(0);
});

div.addEventListener('click', () => {
  insert('/');
});

mult.addEventListener('click', () => {
  insert('*');
});

plus.addEventListener('click', () => {
  insert('+');
});

rest.addEventListener('click', () => {
  insert('-');
});

dot.addEventListener('click', () => {
  insert('.');
});

clear.addEventListener('click', () => {
  calculation.textContent = '';
  result.textContent = 0;
});

back.addEventListener('click', () => {
  let exp = calculation.textContent;
  try {
    calculation.textContent = exp.substring(0, exp.length - 1);
  } catch(error) {
    console.log(error);
  }
});

equal.addEventListener('click', () => {
  let exp = calculation.textContent;
  result.textContent= eval(exp);
  calculation.textContent = result.textContent;
});


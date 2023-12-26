const result = document.querySelector('#resultText');
const calculation = document.querySelector('#calculationText');
const clear = document.querySelector('#clear');
const back = document.querySelector('#back');
const equal = document.querySelector('#equal');

const insert = (num) => {
  console.log(num);
  calculation.textContent += num;
}

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


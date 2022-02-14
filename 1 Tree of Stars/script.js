/*
let form = document.getElementById('line-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let numOfLines = e.target.querySelector('#number-of-lines').value;
  generateTree(Number(numOfLines));
});
*/

function onChangeHandler() {
  let numOfLines = document.querySelector('#number-of-lines').value;
  generateTree(numOfLines);
}

function generateTree(lines) {
  let result = '';
  for (let i = 1; i <= lines; i++) {
    for (let s = lines - i; s > 0; s--) {
      result += ' ';
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      result += '*';
    }
    result += '\n';
  }

  console.log(result);
}

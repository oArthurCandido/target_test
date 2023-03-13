// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const minhaString = '123456789';

function inversor_de_strings(minhaString) {
  let minhaStringEmArray = Array.from(minhaString);
  let stringSize = minhaStringEmArray.length;

  for (let i = 0; i < stringSize / 2; i++) {
    let aux = minhaStringEmArray[i];
    minhaStringEmArray[i] = minhaStringEmArray[stringSize - 1 - i];
    minhaStringEmArray[stringSize - 1 - i] = aux;
  }
  return minhaStringEmArray.join('');
}

console.log(inversor_de_strings(minhaString));

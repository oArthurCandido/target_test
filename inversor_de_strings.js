// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const data = '1234567891011121314151617181920';

function inversor_de_strings(data) {
  let newData = data.split('');

  for (let i = 0; i < newData.length / 2; i++) {
    let aux = newData[i];
    newData[i] = newData[newData.length - 1 - i];
    newData[newData.length - 1 - i] = aux;
  }
  return newData.join('');
}

console.log(inversor_de_strings(data));

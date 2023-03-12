// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(num) {
  if (num < 0) {
    console.log('Número inválido');
    return;
  }

  let a = 0;
  let b = 1;
  let c = 0;

  while (c < num) {
    c = a + b;
    a = b;
    b = c;
  }

  if (c === num) {
    console.log('O número pertence a sequência de Fibonacci');
  } else {
    console.log('O número não pertence a sequência de Fibonacci');
  }
}

fibonacci(-1);
fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(5);
fibonacci(6);
fibonacci(7);
fibonacci(8);

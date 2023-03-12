// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const data = require('./dados.json');

function controle_de_faturamento(data) {
  let menorValor = 0;
  let maiorValor = 0;
  let diasAcimaMedia = 0;
  let mediaMensal = 0;
  data.map(item => {
    if (item.valor > maiorValor) {
      maiorValor = item.valor;
    }
    if (item.valor < menorValor) {
      menorValor = item.valor;
    }
    if (item.valor) {
      mediaMensal += item.valor;
    }
  });

  mediaMensal = mediaMensal / data.length;

  data.map(item => {
    if (item.valor > mediaMensal) {
      diasAcimaMedia++;
    }
  });

  console.log(`Menor valor: ${menorValor}`);
  console.log(`Maior valor: ${maiorValor}`);
  console.log(`Média mensal: ${mediaMensal.toFixed(4)}`);
  console.log(
    `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.: ${diasAcimaMedia}`
  );

  return {
    menorValor,
    maiorValor,
    mediaMensal,
    diasAcimaMedia
  };
}

controle_de_faturamento(data);

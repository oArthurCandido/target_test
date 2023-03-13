// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const data = require('./dados.json');

function controle_de_faturamento(data) {
  let menorValor = data[0].valor;
  let menorValorEmDiasUteis = data[0].valor;
  let maiorValor = 0;
  let diasAcimaMedia = 0;
  let diasAcimaMediaDiasUteis = 0;
  let mediaMensal = 0;
  let diasUteis = 0;
  data.map(item => {
    if (item.valor > maiorValor) {
      maiorValor = item.valor;
    }
    if (item.valor < menorValor) {
      menorValor = item.valor;
    }
    if (item.valor < menorValorEmDiasUteis && item.valor !== 0) {
      menorValorEmDiasUteis = item.valor;
    }
    if (item.valor > 0) {
      mediaMensal += item.valor;
      diasUteis++;
    }
  });

  let mediaMensalGeral = mediaMensal / data.length;
  mediaMensal = mediaMensal / diasUteis;

  data.map(item => {
    if (item.valor > mediaMensalGeral) {
      diasAcimaMedia++;
    }
    if (item.valor > mediaMensal && item.valor !== 0) {
      diasAcimaMediaDiasUteis++;
    }
  });

  console.log(`Menor valor geral: ${menorValor}`);
  console.log(`Menor valor em dias úteis: ${menorValorEmDiasUteis}`);
  console.log(`Maior valor: ${maiorValor}`);
  console.log(`Média mensal geral: ${mediaMensalGeral.toFixed(4)}`);
  console.log(`Média mensal em dias úteis: ${mediaMensal.toFixed(4)}`);
  console.log(
    `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal geral: ${diasAcimaMedia}`
  );
  console.log(
    `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal em dias úteis: ${diasAcimaMediaDiasUteis}`
  );

  return {
    menorValorEmDiasUteis,
    menorValor,
    maiorValor,
    mediaMensalGeral,
    mediaMensal,
    diasAcimaMedia,
    diasAcimaMediaDiasUteis
  };
}

controle_de_faturamento(data);

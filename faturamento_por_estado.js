// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const data = [
  { SP: 67836.43 },
  { RJ: 36678.66 },
  { MG: 29229.88 },
  { ES: 27165.48 },
  { Outros: 19849.53 }
];

function faturamento_por_estado(data) {
  let total = 0;
  let estados = [];
  data.map(item => {
    total += Object.values(item)[0];
  });
  data.map(item => {
    estados.push({
      estado: Object.keys(item)[0],
      percentual: ((Object.values(item)[0] / total) * 100).toFixed(2)
    });
  });
  console.log(estados);
  return estados;
}

faturamento_por_estado(data);

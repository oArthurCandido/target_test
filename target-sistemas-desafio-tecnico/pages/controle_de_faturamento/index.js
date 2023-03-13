import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const Faturamento = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background-color: palevioletred;
    color: white;
    cursor: pointer;
  }
`;

function index() {
  const [data, setData] = useState('');
  const [insightsGenerated, setInsightsGenerated] = useState(false);
  const [insights, setInsights] = useState({});
  const getData = () => {
    let data = require('./dados.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  function controle_de_faturamento(data) {
    setInsightsGenerated(true);
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

    setInsights({
      menorValorEmDiasUteis,
      menorValor,
      maiorValor,
      mediaMensalGeral,
      mediaMensal,
      diasAcimaMedia,
      diasAcimaMediaDiasUteis
    });

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
  return (
    <Container>
      {!insightsGenerated ? (
        <div>
          {!data ? (
            <div>Carregando...</div>
          ) : (
            <div>
              {data.map(item => (
                <div key={item.dia}>
                  <Faturamento>
                    <p>
                      {`Faturamento do dia ${item.dia}:
                    `}
                    </p>

                    <p>{`R$${item.valor}`}</p>
                  </Faturamento>
                </div>
              ))}
            </div>
          )}

          <Button onClick={() => controle_de_faturamento(data)}>
            Gerar insights
          </Button>
        </div>
      ) : (
        <div>
          <p>Insights gerados</p>
          <p>{`Menor valor em dias úteis: R$${insights.menorValorEmDiasUteis}`}</p>
          <p>{`Menor valor geral: R$${insights.menorValor}`}</p>
          <p>{`Maior valor: R$${insights.maiorValor}`}</p>
          <p>{`Média mensal geral: R$${insights.mediaMensalGeral.toFixed(
            4
          )}`}</p>
          <p>{`Média mensal em dias úteis: R$${insights.mediaMensal.toFixed(
            4
          )}`}</p>
          <p>{`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal geral: ${insights.diasAcimaMedia}`}</p>
          <p>{`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal em dias úteis: ${insights.diasAcimaMediaDiasUteis}`}</p>
          <Button onClick={() => setInsightsGenerated(false)}>Retornar</Button>
        </div>
      )}
    </Container>
  );
}

export default index;

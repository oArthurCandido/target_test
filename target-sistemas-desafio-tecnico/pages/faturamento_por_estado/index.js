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
  const [insightsGenerated, setInsightsGenerated] = useState(false);
  const [insights, setInsights] = useState({});
  const [total, setTotal] = useState(0);

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
    setInsightsGenerated(true);
    setInsights(estados);
    setTotal(total);
    return estados;
  }

  return (
    <Container>
      {!insightsGenerated ? (
        <div>
          {!data ? (
            <div>Carregando...</div>
          ) : (
            <div>
              <div>Faturamento por Estado</div>
              {data.map((item, index) => (
                <div key={index}>
                  <Faturamento>
                    <p>
                      {` ${Object.keys(item)[0]}: R$${Object.values(item)[0]}`}
                    </p>
                  </Faturamento>
                </div>
              ))}
            </div>
          )}

          <Button onClick={() => faturamento_por_estado(data)}>
            Gerar insights
          </Button>
        </div>
      ) : (
        <div>
          <p>Insights gerados</p>
          <p>{`Faturamento total: R$${total}`}</p>
          {insights.map((item, index) => (
            <div key={index}>
              <Faturamento>
                <p>{` ${item.estado}: ${item.percentual}%`}</p>
              </Faturamento>
            </div>
          ))}
          <Button onClick={() => setInsightsGenerated(false)}>Retornar</Button>
        </div>
      )}
    </Container>
  );
}

export default index;

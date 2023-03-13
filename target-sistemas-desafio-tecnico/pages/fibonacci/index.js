import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Resposta = styled.p`
  color: ${props => props.color};
`;

function index() {
  const [fiboNumber, setFiboNumber] = useState(0);
  const [isFibo, setIsFibo] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  const onChange = e => {
    const { value } = e.target;
    setFiboNumber(value);
    setIsCalculated(false);
  };

  function fibonacci(num) {
    setIsFibo(false);
    setIsCalculated(true);
    num = parseInt(num);
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
      setIsFibo(true);
    } else {
      setIsFibo(false);
    }
  }

  return (
    <Container>
      <input
        onChange={onChange}
        type="text"
        id="fiboNumber"
        name="fiboNumber"
      />
      <button onClick={() => fibonacci(fiboNumber)}>Calcular</button>
      <div>{!isCalculated ? fiboNumber : ''}</div>
      <div>
        {isCalculated ? (
          isFibo ? (
            <Resposta color={'blue'}>
              {`O número ${fiboNumber} pertence a sequência de Fibonacci `}
            </Resposta>
          ) : (
            <Resposta color={'red'}>
              {`O número ${fiboNumber} não pertence a sequência de Fibonacci `}
            </Resposta>
          )
        ) : (
          'Fibonacci'
        )}
      </div>
      <div></div>
    </Container>
  );
}

export default index;

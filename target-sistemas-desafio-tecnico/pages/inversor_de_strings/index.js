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
  const [myString, setMyString] = useState('');
  const [myInvertedString, setMyInvertedString] = useState('');
  const [isInverted, setIsInverted] = useState(false);

  const onChange = e => {
    const { value } = e.target;
    setMyString(value);
    setIsInverted(false);
  };

  function inversor_de_strings(minhaString) {
    let minhaStringEmArray = Array.from(minhaString);
    let stringSize = minhaStringEmArray.length;

    for (let i = 0; i < stringSize / 2; i++) {
      let aux = minhaStringEmArray[i];
      minhaStringEmArray[i] = minhaStringEmArray[stringSize - 1 - i];
      minhaStringEmArray[stringSize - 1 - i] = aux;
    }
    setMyInvertedString(minhaStringEmArray.join(''));
    setIsInverted(true);

    return minhaStringEmArray.join('');
  }

  return (
    <Container>
      <input onChange={onChange} type="text" id="myString" name="myString" />
      <button onClick={() => inversor_de_strings(myString)}>Inverter</button>
      <div>{!isInverted ? myString : ''}</div>
      <div>
        {isInverted ? (
          isInverted ? (
            <Resposta color={'blue'}>{` ${myInvertedString}  `}</Resposta>
          ) : null
        ) : (
          'Digite algo para ser invertido'
        )}
      </div>
      <div></div>
    </Container>
  );
}

export default index;

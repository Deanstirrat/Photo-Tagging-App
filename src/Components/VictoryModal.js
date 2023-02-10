import React, { useState } from 'react';
import styled from 'styled-components';

function victoryModal({ time, uploadNewScore }) {
  const [name, setName] = useState('unknown');
  const onChangeHandler = (event) => {
    setName(event.target.value);
  };
  return (
    <ModalContainer>
      <h2>WINNER!</h2>
      <p>Time: {time} seconds</p>
      <p>Enter Your Name:</p>
      <NameInput
        type="text"
        value={name}
        id="name"
        name="name"
        onChange={onChangeHandler}
      />
      <StartButton onClick={() => uploadNewScore(name, time)}>
        Submit score
      </StartButton>
    </ModalContainer>
  );
}

const NameInput = styled.input`
  border: solid;
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: calc(50vw - 100px);
  top: calc(50vh - 100px);
  z-index: 100;
  background-color: white;
  padding: 20px;
  gap: 10px;
`;

const StartButton = styled.button`
  border-radius: 5px;
  background-color: green;
  padding: 5px;
`;

export default victoryModal;

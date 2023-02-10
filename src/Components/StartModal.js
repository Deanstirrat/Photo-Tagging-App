import React from 'react';
import styled from 'styled-components';
import waldo from '../Assets/waldo.png';
import wallyWanda from '../Assets/wally-wenda.jpeg';
import wizardWhitebeard from '../Assets/wizard.gif';

function StartModal({ setModal }) {
  return (
    <ModalContainer>
      <h2>Find the following items</h2>
      <PeopleContainer>
        <PersonContainer>
          <PersonIcon src={waldo} />
          Waldo
        </PersonContainer>
        <PersonContainer>
          <PersonIcon src={wallyWanda} />
          Wanda
        </PersonContainer>
        <PersonContainer>
          <PersonIcon src={wizardWhitebeard} />
          Wizard
        </PersonContainer>
      </PeopleContainer>
      <StartButton onClick={() => setModal()}>Start</StartButton>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
width: 50%;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  background-color: white;
  padding 20px;
  border-radius: 10%;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

const PeopleContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PersonIcon = styled.img`
  height: 150px;
  width: auto;
`;

const StartButton = styled.button`
  border-radius: 5px;
  background-color: green;
  width: 50px;
  border: none;
  color: white;
  padding: 10px;
  width: 20%;
`;

export default StartModal;

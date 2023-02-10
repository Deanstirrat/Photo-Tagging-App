import React from 'react';
import styled from 'styled-components';

function ClickMenu({ xCoord, yCoord, handleGuess, found }) {
  // console.log(xCoord + ':' + yCoord);
  return (
    <MenuContainer xPos={xCoord} yPos={yCoord}>
      <MenuTab
        onClick={() => handleGuess('waldo', xCoord, yCoord)}
        found={found.waldo}
      >
        Waldo
      </MenuTab>
      <MenuTab
        onClick={() => handleGuess('wanda', xCoord, yCoord)}
        found={found.wanda}
      >
        Wanda
      </MenuTab>
      <MenuTab
        onClick={() => handleGuess('wizard', xCoord, yCoord)}
        found={found.wizard}
      >
        Wizard
      </MenuTab>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: ${(props) => props.xPos}%;
  top: ${(props) => props.yPos}%;
  background-color: none;
  gap: 2px;
`;

const MenuTab = styled.button`
  border: none;
  padding: 15px;
  background-color: ${(props) => (props.found ? 'green' : '#e8e288')};
  color: black;
  border-radius: 5%;
  &:hover {
    filter: ${(props) =>
      props.found ? 'brightness(100%)' : 'brightness(85%)'};
  }
`;

export default ClickMenu;

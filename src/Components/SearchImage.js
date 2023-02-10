import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import backgroundImage from '../Assets/wheresWaldo.jpeg';
import ClickMenu from './ClickMenu';

function SearchImage({ modalOpen, timer, handleGuess, numFound, found }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickCoords, setClickCoords] = useState({ x: 50, y: 50 });
  const imageRef = useRef();

  const handleImageClick = (e) => {
    setClickCoords({
      x: (e.pageX / imageRef.current.offsetWidth) * 100,
      y: (e.pageY / imageRef.current.offsetHeight) * 100,
    });
    if (!modalOpen) setMenuOpen(!menuOpen);
  };

  return (
    <GameContainer onClick={handleImageClick}>
      <Timer>{timer}</Timer>
      <FoundCounter>
        <Span>{numFound}</Span> left to find
      </FoundCounter>
      {menuOpen && (
        <ClickMenu
          xCoord={clickCoords.x}
          yCoord={clickCoords.y}
          handleGuess={handleGuess}
          found={found}
        />
      )}
      <ImageContainer
        src={backgroundImage}
        ref={imageRef}
        alt="Wimmelbilder of argentina"
      />
    </GameContainer>
  );
}

const Span = styled.span`
  color: red;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const FoundCounter = styled.div`
  margin: 15px;
  border-radius: 10%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: white;
  color: black;
  padding: 10px;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.img`
  width: 100%;
`;

const Timer = styled.div`
  margin-top: 30px;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 5;
  width: 60px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5;
  padding-bottom: 5;
  color: white;
  background-color: black;
  border-radius: 10%;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default SearchImage;

import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { doc, getDoc, addDoc, collection } from 'firebase/firestore';
import styled from 'styled-components';
import SearchImage from './Components/SearchImage';
import StartModal from './Components/StartModal';
import VictoryModal from './Components/VictoryModal';
const noneFound = { waldo: false, wanda: false, wizard: false };

function App({ db }) {
  const [modalOpen, setModalOpen] = useState(true);
  const [timer, setTimer] = useState(0);
  const [found, setFound] = useState(noneFound);
  const [numFound, setNumFound] = useState(Object.keys(noneFound).length);
  useEffect(() => {
    if (Object.values(found).every(Boolean)) {
      //stop timer
      setFound(noneFound);
      clearInterval(countRef.current);
      setVictoryModal(true);
    }
  });
  const [victoryModal, setVictoryModal] = useState(false);
  const countRef = useRef(null);

  const handleSetModal = () => {
    setModalOpen(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => Number((timer + 0.1).toFixed(1)));
    }, 100);
  };

  const handleUploadNewScore = async (name, time) => {
    await addDoc(collection(db, 'records'), { name, time });
    setVictoryModal(false);
    setTimer(0);
    setNumFound(Object.keys(noneFound).length);
    setModalOpen(true);
  };

  const handleGuess = async (guess, xCoord, yCoord) => {
    const docRef = doc(db, 'locations', guess);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      if (
        docSnap.data().x > xCoord - 3 &&
        docSnap.data().x < xCoord + 3 &&
        docSnap.data().y > yCoord - 5 &&
        docSnap.data().y < yCoord + 5
      ) {
        setFound((found) => ({
          ...found,
          [guess]: true,
        }));
        setNumFound(numFound - 1);
      } else {
        // console.log('WRONG @(' + xCoord + ':' + yCoord + ')');
      }
    } else {
      // doc.data() will be undefined in this case
      alert('No such document!');
    }
  };
  return (
    <AppContainer>
      {modalOpen && <StartModal setModal={handleSetModal} />}
      {victoryModal && (
        <VictoryModal time={timer} uploadNewScore={handleUploadNewScore} />
      )}
      <SearchImage
        modalOpen={modalOpen}
        timer={timer}
        handleGuess={handleGuess}
        numFound={numFound}
        found={found}
      />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;

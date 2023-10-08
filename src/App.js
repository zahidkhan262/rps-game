import { useState } from 'react';
import './App.css';
import RPS from './RPS';
import { Toaster } from 'react-hot-toast'


function App() {

  const [gameState, setGameState] = useState({
    score: 0,
    computerScore: 0,
    userScore: 0,
    userChoice: "",
    computerChoice: "",
    result: ""

  })

  return (
    <>
      <Toaster />
      <RPS setGameState={setGameState} gameState={gameState} />
    </>
  );
}

export default App;

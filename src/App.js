import React, { useState } from 'react';
import './App.css';

// Komponen
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'

function App() {

  const [gameState, setGameState] = useState('menu');

  return (
    <div className="App">
      <h1>Quiz App</h1>

      {/* Pengecekan State Awal */}
      {gameState === 'menu' && <MainMenu />}
      {gameState === 'quiz' && <Quiz />}
      {gameState === 'endScreen' && <EndScreen />}



    </div>
  );
}

export default App;

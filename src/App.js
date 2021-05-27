import React, { useState, useContext } from 'react';
import './App.css';

// Komponen
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'

// Context
import { QuizContext } from './Helpers/Contexts'

function App() {

  const [gameState, setGameState] = useState('menu');

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState}}>
        {/* Pengecekan State Awal */}
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;

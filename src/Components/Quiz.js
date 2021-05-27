import React, { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'

// Soal
import { Questions } from '../Helpers/QuestionBank'

export default function Quiz() {

    const { score, setScore, setGameState } = useContext(QuizContext);

    // Cek Soal
    const [currQuestion, setCurrQuestion] = useState(0);

    // Cek Pilihan
    const [optionChosen, setOptionChosen] = useState('');

    const nextQuestion = () => {
        if(Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1)
        }
        console.log(score)
        setCurrQuestion(currQuestion+1)
    }

    const finishQuiz = () => {
        if(Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1)
        }
        setGameState('endScreen');
    }

    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].soal}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen('A')}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen('B')}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen('C')}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen('D')}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion == Questions.length - 1 ? (
                <button onClick={() => finishQuiz()}>Selesai</button>
            ) : (
                <button onClick={() => nextQuestion()}>Next</button>
            )}
        </div>
    )
}

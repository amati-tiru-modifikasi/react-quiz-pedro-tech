import React, { useState } from 'react'

// Soal
import { Questions } from '../Helpers/QuestionBank'

export default function Quiz() {

    // Cek Soal
    const [currQuestion, setCurrQuestion] = useState(1);

    // Cek Pilihan
    const [optionChosen, setOptionChosen] = useState('');

    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].soal}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen('A')}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen('B')}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen('C')}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen('D')}>{Questions[currQuestion].optionD}</button>
            </div>
            <button>Next</button>
        </div>
    )
}

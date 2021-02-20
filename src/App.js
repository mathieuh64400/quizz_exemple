import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

export default function App() {
  const questions = [
		{
			questionText: 'En quelle Année le langage de programmation Cobol a-t-il-été créé ?',
			answerOptions: [
				{ answerText: '1959', isCorrect: true},
				{ answerText: '2009', isCorrect: false },
				{ answerText: '1958', isCorrect: false },
				{ answerText: '1949', isCorrect: false },
			],
		},
		{
			questionText: 'Combien de noeuds possedaient arpanet en 1969?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '7', isCorrect: false },
				{ answerText: '10', isCorrect: false },
			],
    },	
    {
			questionText: 'Parmi ces langages, données l\'orde de creation (plus ancien au plus recent)?',
			answerOptions: [
				{ answerText: 'Fortran>Cobol>Algol>Lisp', isCorrect: false },
				{ answerText: 'Algol>Fortran>Lisp>Cobol', isCorrect: false },
				{ answerText: 'Fortran>Lisp>Algol>Cobol', isCorrect: true },
				{ answerText: 'Cobol>Lisp>Fortran>Algol', isCorrect: false },
			],
		},
		{
			questionText: 'Qui a inventé la souris?',
			answerOptions: [
				{ answerText: 'Douglas EngelBarth', isCorrect: true },
				{ answerText: 'james TenBerg', isCorrect: false },
				{ answerText: 'Gerald Abbadie', isCorrect: false },
				{ answerText: 'jean-Daniel Nicoud', isCorrect: false },
			],
		},
		{
			questionText: 'A quoi correspond le Bull Gamma 60?',
			answerOptions: [
				{ answerText: ' la première machine non deterministe ', isCorrect: false },
				{ answerText: 'un algorithme des années 1960', isCorrect: false },
				{ answerText: 'le nom du premier ordinateur avec un circuit intégré', isCorrect: false },
				{ answerText: 'le premier ordinateur multitache ', isCorrect: true },
			],
    },
    	{
			questionText: 'Qu est-ce que le RAMAC 305?',
			answerOptions: [
				{ answerText: 'le premier disque dur', isCorrect: true },
				{ answerText: 'la première diqsette', isCorrect: false },
				{ answerText: 'le premier ordinateur IBM a destination du publique', isCorrect: false },
				{ answerText: 'le premier ordinateur français', isCorrect: false },
			],
    },
    {
			questionText: 'Qu est-ce que l UNIVAC?',
			answerOptions: [
				{ answerText: 'le premier ordinateur jamais commercialisé', isCorrect: true },
				{ answerText: 'le dernier orinateur commercialisé des années 1960', isCorrect: false },
				{ answerText: 'le premier ordinateur français a destination des professionnels', isCorrect: false },
				{ answerText: 'le premier ordinateur Anglais', isCorrect: false },
			],
    },
    {
			questionText: 'Pourquoi Ivan Sutherland est connu?',
			answerOptions: [
				{ answerText: 'pour avoir inspirer une nouvelle vision de l informatique', isCorrect: false },
				{ answerText: 'Pour avoir creer le tout premier CAO', isCorrect: true },
				{ answerText: 'Pour avoir imaginer le premier Compilateur', isCorrect: false },
				{ answerText: 'pour avoir créer un systeme de cryptage infaillible', isCorrect: false },
			],
    },
    {
			questionText: 'Quand le test de Turing a-t-il vu le jour?',
			answerOptions: [
				{ answerText: '1959', isCorrect: false },
				{ answerText: '1949', isCorrect: false },
				{ answerText: '1954', isCorrect: false },
				{ answerText: '1950', isCorrect: true },
			],
		}, {
			questionText: ' Quand et Qui a crée le terme informatique?',
			answerOptions: [
				{ answerText: '1959 Ivana Stump', isCorrect: false },
				{ answerText: '1957 Karl SteinBuch', isCorrect: true },
				{ answerText: '1954 Alan Turing', isCorrect: false },
				{ answerText: '1956 Frederik rosing Bull ', isCorrect: false },
			],
		},
  ];


  const [currentQuestion, setCurrentQuestion]=useState(0);
  const [showScore, setShowScore]=useState(false);
  const[score,setScore]=useState(0);


  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect===true) {
      // alert(" Bravo !!! votre reponse est correcte !!! ");
      setScore(score+1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion<questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // alert("fin du quizz");
      setShowScore(true);
    }
    
  };
  
  return (
    <div className="App">
      {showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +1}</span>/{questions.length}
						</div>
						<div className='question-text'> {questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
            {
            questions[currentQuestion].answerOptions.map((answerOption, index)=>
            <button onClick={() => 
              handleAnswerButtonClick(answerOption.isCorrect)}>
              {answerOption.answerText}
            </button>)
            }
						{/* <button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button> */}
					</div>
        </>
        )}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

// export default App;

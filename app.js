const userQuestion = document.getElementById('user-input');
const button = document.getElementById('reveal-btn');
const resetButton = document.getElementById('reset-button');


 // const colors = ['yellow', 'white', 'green'];

  import { answers } from './answers.js';
    // to generate a random color from he array
    // generate a random number between 0 and 2
    // generate a random index


    const getRandomNumber = (max) =>{
      return Math.floor(Math.random() * max);
    };    

    // const randomIdx = getRandomNumber(colors.length);
    // console.log(colors[randomIdx]);

    
    button.addEventListener('click', () =>{
      const randomAnswer = getRandomNumber(answers.length);
      console.log(answers[randomAnswer]);

      const answerInput = document.getElementById('response');
      answerInput.textContent = answers[randomAnswer];
      
    })

    resetButton.addEventListener('click', () =>{
      userQuestion.textContent = '' ;
      response.textContent = 'Ask Again Later';

    })
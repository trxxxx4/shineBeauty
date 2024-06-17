const buttonsTgl = document.querySelectorAll('.svg__tgl');
const answers = document.querySelectorAll('.answer__item');
const questionContainer = document.querySelectorAll('.questions__container');
const buttonsQuestions = document.querySelectorAll('.questin__section');




buttonsQuestions.forEach((question, index) => {
    
        question.addEventListener('click', function () {
            buttonsTgl[index].classList.toggle('svg__tgl__origin');
    
            buttonsTgl[index].classList.toggle('svg__tgl__rotated');
            answers[index].classList.toggle('answer__closed');
            answers[index].classList.toggle('answer__opened');
        })
    
    

})


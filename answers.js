const buttons = document.querySelectorAll('.svg__tgl');
const answers = document.querySelectorAll('.answer__item');
const questionContainer = document.querySelectorAll('.questions__container');

buttons.forEach((button, index)=>{
    
        button.addEventListener('click', function(){
            button.classList.toggle('svg__tgl__origin');
            
            button.classList.toggle('svg__tgl__rotated');
            answers[index].classList.toggle('answer__closed');
            answers[index].classList.toggle('answer__opened');
        })
    
})
const logo = document.querySelector('.logo')
const navContainer = document.querySelector('.nav__container');
const main = document.querySelector('main');
const navBtn = document.querySelector('.nav__tgl__btn');
const navBtnLines = document.querySelectorAll('.nav__btn__line');



navBtn.addEventListener('click', () => {
    if (navContainer.classList.contains('nav__removed')){
        navContainer.classList.remove('nav__removed');
        navContainer.classList.add('nav__container__closed');
        navBtn.classList.add('nav__tgl__btn__origin');
        
    }
    navBtn.classList.toggle('nav__tgl__btn__origin');
    navBtn.classList.toggle('nav__tgl__btn__rotated');
    navContainer.classList.toggle('nav__container__closed');
    navContainer.classList.toggle('nav__container__opened');
    main.classList.toggle('bg__blur');
    logo.classList.toggle('bg__blur');
    
    

})




const links = document.querySelectorAll('.link');

links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        main.classList.toggle('bg__blur');
    logo.classList.toggle('bg__blur');
    navBtn.classList.toggle('nav__tgl__btn__origin');
    navBtn.classList.toggle('nav__tgl__btn__rotated');
    navContainer.classList.toggle('nav__container__closed');
    navContainer.classList.toggle('nav__container__opened');
    })
    
})
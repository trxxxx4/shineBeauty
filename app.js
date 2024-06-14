



const displayHeight = String(window.innerHeight);


console.log(displayHeight);


gsap.registerPlugin(ScrollTrigger);


/*
gsap.to('.trigger__element',  {
    scrollTrigger: {
        trigger: '.trigger__element',
        start: 'top center',
        end: 'bottom 400px',
        
        scrub: 1,
        
    },
     x: 300,
     duration: 3,
     rotation: 360,
     
     ease: "none"
     
} );*/




gsap.to('.line', {
    scrollTrigger: {
        trigger: '.line',
        start: 'top 90%',
        end: 'bottom 10%',

        scrub: 1,
    },
    xPercent: -30,
    duration: 5,


    ease: "none"
})


gsap.from(
    '#title1', {
    y: 50,
    duration: 2,
    opacity: 0
}
)


gsap.from(
    '#title2', {
    y: 50,
    duration: 1.5,
    opacity: 0
}
)





































gsap.fromTo('.gallery__main__container', {
    xPercent: 100,
   
}, {

scrollTrigger: {
    trigger: '.brands__main__container',
    scrub: 1,
    
    start: 'bottom bottom',
    end: '+=100%',
    pin: '.st1',
    
    
},
xPercent: 0,
 duration: 3,




});










ScrollTrigger.create({
    trigger: '.footer__main__container',
   
    start: 'top top',
    end: 'bottom bottom',
    pin: '.footer__image'
    
   
})































/*
const tl = gsap.timeline();



tl.from('gallery__main__container', {
    xPercent: 100,
})
let st = ScrollTrigger.create({
    animation: tl,
    trigger: ".gallery__main__container",
    pin: ".brands__main__container",
    start: "top bottom",
    end: "+=100%",
    scrub: true
  });*/
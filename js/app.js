// HAMBURGER MENU //
const menu = document.querySelector('.nav__menu');
const burgerBtn = document.querySelector('.nav__burgerBtn');
const closeBtn = document.querySelector('.btn--close');
const bodyEl = document.body;
const headerEl = document.querySelector('.header');

//  SECTION TOOLS SLIDERS //
const leftArrow = document.querySelector('.tools__arrow--left');
const rightArrow = document.querySelector('.tools__arrow--right')
const boxImg = document.querySelectorAll('.tools__boxImg');
const sliders = document.querySelectorAll('.tools__img');

//  SECTION ABOUT SLIDERS //
const btnNext = document.querySelector('.about__btn--next');
const btnPrev = document.querySelector('.about__btn--prev');
const aboutSliders = document.querySelector('.about__containerSliders');
const aboutCards = document.querySelectorAll('.about__slideCard'); 
const carouselMove = 458

let card = 0

const changeCard = () => {
    if(card > aboutCards.length - 1){
        card = 0
    }else if (card < 0 ){
        card = aboutCards.lengt - 1
    }

    aboutSliders.style.transform = `translateX(${-card * carouselMove}px)`
}

const nextCard = () => {
    card++

    changeCard()
}

const prevCard = () => {
    card--

    changeCard()
}

btnNext.addEventListener('click', nextCard);
btnPrev.addEventListener('click', prevCard);


let number = 1

const nextSlide = () => {
    number++

    if (number >= sliders.length) {
        number = 2
    }
    showSlide()
}

const prevSlide = () => {
    number--

    if (number >= sliders.lengt) {
        number = 0
    }
    showSlide()
}

const showSlide = () => {
    sliders.forEach((slide, index) => {
   
        if (index > number) {
            slide.classList.remove('img--active')
        } else {
            slide.classList.add('img--active')
        }
    })

    stopClickArrow()
};

const stopClickArrow = () => {
    if (number === 2) {
        rightArrow.style.display = "none"
    } else if (number === 0) {
        leftArrow.style.display = "none" 
    } else {
        leftArrow.style.display = ""
        rightArrow.style.display = ""
    }
}


const openMenu = (e) => {
    menu.classList.toggle('nav__menu--active');
    burgerBtn.classList.toggle('btn--close');
    bodyEl.classList.toggle('body--overflow');
};

const closeMenu = (e) => {

    menu.classList.remove('nav__menu--active');
    burgerBtn.classList.remove('btn--close');
    bodyEl.classList.remove('body--overflow');
};

const clickOutside = (e) => {

    if (menu.classList.contains('nav__menu--active')) {

        if (!menu.contains(e.target))

            closeMenu()

        if (burgerBtn.contains(e.target))
            openMenu()
    }

};

const scrollHeader = () => {
    this.scrollY >= 50 ? headerEl.classList.add('header--active') :
        headerEl.classList.remove('header--active')
};



const resizeMenu = () => {
    if (this.innerWidth >= 930)
        closeMenu()
};



window.addEventListener('resize', resizeMenu);
window.addEventListener('scroll', scrollHeader);
burgerBtn.addEventListener('click', openMenu);
document.addEventListener('mouseup', clickOutside);
rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);
const menu = document.querySelector('.nav__menu');
const burgerBtn = document.querySelector('.nav__btn--open');
const closeBtn = document.querySelector('.btn--close');
const bodyEl = document.body;

const headerEl = document.querySelector('.header');

const openMenu = (e) => {
    menu.classList.toggle('nav__menu--active');
    burgerBtn.classList.toggle('btn--close');
    bodyEl.classList.toggle('body--overflow');
};

const closeMenu = (e) =>{

    menu.classList.remove('nav__menu--active');
    burgerBtn.classList.remove('btn--close');
    bodyEl.classList.remove('body--overflow');
};

const clickOutside = (e) => {

    if(menu.classList.contains('nav__menu--active')){
        
        if(!menu.contains(e.target))

            closeMenu()
        
            if(burgerBtn.contains(e.target))
             openMenu()
    }

}

const scrollHeader = () =>{
    this.scrollY >=50 ? headerEl.classList.add('header--active')
                       : headerEl.classList.remove('header--active')
}

window.addEventListener('scroll',scrollHeader);
burgerBtn.addEventListener('click',openMenu);
document.addEventListener('mouseup',clickOutside);
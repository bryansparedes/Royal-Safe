//*LABEL HEADER
const header = document.querySelector('.container__header');

window.addEventListener('scroll', function(){
    header.classList.toggle('active', window.scrollY>0)
})

//!DARKMODE
const darkMode = document.querySelector('.card-container');
const darkMode2 = document.querySelector('.card-container2');
const darkMode3 = document.querySelector('.card-container3');
const darkMode4 = document.querySelector('.container-data');
const darkMode5 = document.querySelector('.container__reviews');
const darkMode6 = document.querySelector('.swiper-slide');
const darkModal = document.querySelector('.modal-container');
const darkModal2 = document.querySelector('.modal-container2');
const darkModal3 = document.querySelector('.modal-container3');
const darkModal4 = document.querySelector('.modal-container4');
const darkModal5 = document.querySelector('.modal-container5');
const darkModal6 = document.querySelector('.modal-container6');
const darkModal7 = document.querySelector('.modal-container7');
const darkModal8 = document.querySelector('.modal-container8');

let toggle = document.getElementById('toggle');
let label_toggle =  document.getElementById('label_toggle');
toggle.addEventListener('click', (e) => {
    let cheked = e.target.checked;

    document.body.classList.toggle('dark');
    darkMode.classList.toggle('dark')
    darkMode2.classList.toggle('dark');
    darkMode3.classList.toggle('dark');
    darkMode4.classList.toggle('dark');
    darkMode5.classList.toggle('dark');
    darkMode6.classList.toggle('dark');
    darkModal.classList.toggle('dark');
    darkModal2.classList.toggle('dark');
    darkModal3.classList.toggle('dark');
    darkModal4.classList.toggle('dark');
    darkModal5.classList.toggle('dark');
    darkModal6.classList.toggle('dark');
    darkModal7.classList.toggle('dark');
    darkModal8.classList.toggle('dark');
    
    if (cheked===true){
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
})

//*SLIDER
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const slider = document.getElementById('slider');
const sliderSection = document.querySelectorAll('.slider-section');

btnLeft.addEventListener('click', e => moveToLeft());
btnRight.addEventListener('click', e => moveToRight());

setInterval(() => {
    moveToRight();
}, 10000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length;

function moveToRight() {

    if(counter >= sliderSection.length - 1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translateX(-${operacion}%)`;    
        slider.style.transition = "none";
        return;
    }
    counter++;
    operacion = operacion + widthImg
    slider.style.transform = `translateX(-${operacion}%)`;
    slider.style.transition = "all ease 1.5s"
}

function moveToLeft() {
    counter--;
    if(counter < 0){
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translateX(-${operacion}%)`;   
        slider.style.transition = "none"; 
        return;
    }
    operacion = operacion - widthImg
    slider.style.transform = `translateX(-${operacion}%)`;
    slider.style.transition = "all ease 1.5s"
}

//*PAGINA DE NAVEGACION
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.img-slide');
const contents = document.querySelectorAll('.content');

let sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    contents.forEach((content) => {
        content.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');

}

    btns.forEach((btn , i) => {
        btn.addEventListener('click', () => {
            sliderNav(i)
        });
    });

//!WHAT DO WE DO CARDS

const serviceCard = document.querySelector('.service1');
const serviceCard2 = document.querySelector('.service2');
const serviceCard3 = document.querySelector('.service3');
const serviceCard4 = document.querySelector('.service4');

serviceCard.addEventListener("click", (e) => {
    serviceCard.classList.toggle('selected');
});

serviceCard2.addEventListener("click", (e) => {
    serviceCard2.classList.toggle('selected');
});

serviceCard3.addEventListener("click", (e) => {
    serviceCard3.classList.toggle('selected');
});

serviceCard4.addEventListener("click", (e) => {
    serviceCard4.classList.toggle('selected');
});

//!SLIDER EXPERIENCE

const Left = document.querySelector('.btn-left-slide');
const Right = document.querySelector('.btn-right-slide');
const Slider = document.getElementById('slider-experience');
const sliderSectionExperience = document.querySelectorAll('.slider-section-experience');

Left.addEventListener('click', e => ToLeft());
Right.addEventListener('click', e => ToRight());

setInterval(() => {
    ToRight();
}, 20000);

let operacions = 0;
let counters = 0;
let widthImgs = 100 / sliderSectionExperience.length;

function ToRight() {

    if(counters >= sliderSectionExperience.length - 1){
        counters = 0;
        operacions = 0;
        Slider.style.transform = `translateX(-${operacions}%)`;    
        Slider.style.transition = "none";
        return;
    }
    counters++;
    operacions = operacions + widthImgs
    Slider.style.transform = `translateX(-${operacions}%)`;
    Slider.style.transition = "all ease 1.5s"
}

function ToLeft() {
    counters--;
    if(counters < 0){
        counters = sliderSectionExperience.length - 1;
        operacions = widthImgs * (sliderSectionExperience.length - 1);
        Slider.style.transform = `translateX(-${operacions}%)`;   
        Slider.style.transition = "none"; 
        return;
    }
    operacions = operacions - widthImgs
    Slider.style.transform = `translateX(-${operacions}%)`;
    Slider.style.transition = "all ease 1.5s"
}

//!MODAL EXPERIENCE
const openModal = document.querySelector('.open');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');

openModal.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.add('modal-show');
});

closeModal.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.remove('modal-show');
});
//-----------------------------------------------------------------
const openModal2 = document.querySelector('.open2');
const modal2 = document.querySelector('.modal2');
const closeModal2 = document.querySelector('.modal-close2');

openModal2.addEventListener("click", (e) => {
    e.preventDefault();

    modal2.classList.add('modal-show');
});

closeModal2.addEventListener("click", (e) => {
    e.preventDefault();

    modal2.classList.remove('modal-show');
});
//-----------------------------------------------------------------
const openModal3 = document.querySelector('.open3');
const modal3 = document.querySelector('.modal3');
const closeModal3 = document.querySelector('.modal-close3');

openModal3.addEventListener("click", (e) => {
    e.preventDefault();

    modal3.classList.add('modal-show');
});

closeModal3.addEventListener("click", (e) => {
    e.preventDefault();

    modal3.classList.remove('modal-show');
});
//-----------------------------------------------------------------
const openModal4 = document.querySelector('.open4');
const modal4 = document.querySelector('.modal4');
const closeModal4 = document.querySelector('.modal-close4');

openModal4.addEventListener("click", (e) => {
    e.preventDefault();

    modal4.classList.add('modal-show');
});

closeModal4.addEventListener("click", (e) => {
    e.preventDefault();

    modal4.classList.remove('modal-show');
});
//-----------------------------------------------------------------
const openModal5 = document.querySelector('.open5');
const modal5 = document.querySelector('.modal5');
const closeModal5 = document.querySelector('.modal-close5');

openModal5.addEventListener("click", (e) => {
    e.preventDefault();

    modal5.classList.add('modal-show');
});

closeModal5.addEventListener("click", (e) => {
    e.preventDefault();

    modal5.classList.remove('modal-show');
});
//-----------------------------------------------------------------
const openModal6 = document.querySelector('.open6');
const modal6 = document.querySelector('.modal6');
const closeModal6 = document.querySelector('.modal-close6');

openModal6.addEventListener("click", (e) => {
    e.preventDefault();

    modal6.classList.add('modal-show');
});

closeModal6.addEventListener("click", (e) => {
    e.preventDefault();

    modal6.classList.remove('modal-show');
});
//-----------------------------------------------------------------
const openModal7 = document.querySelector('.open7');
const modal7 = document.querySelector('.modal7');
const closeModal7 = document.querySelector('.modal-close7');

openModal7.addEventListener("click", (e) => {
    e.preventDefault();

    modal7.classList.add('modal-show');
});

closeModal7.addEventListener("click", (e) => {
    e.preventDefault();

    modal7.classList.remove('modal-show');
});
//-----------------------------------------------------------------
const openModal8 = document.querySelector('.open8');
const modal8 = document.querySelector('.modal8');
const closeModal8 = document.querySelector('.modal-close8');

openModal8.addEventListener("click", (e) => {
    e.preventDefault();

    modal8.classList.add('modal-show');
});

closeModal8.addEventListener("click", (e) => {
    e.preventDefault();

    modal8.classList.remove('modal-show');
});

// REVIEWS

const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 20,
    pagination:{
        el: '.js-testimonials-pagination',
        clickable: true
    },
    breakpoints:{
        767:{
            slidesPerView: 2
        }
    }
});

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


// slider javascript

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Aminites Js 

var swiper = new Swiper(".Amenities-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// popup js 

// Function to show the popup
function showmodal() {
    document.getElementById('.overlay').style.display = 'flex';
}

// Function to hide the popup
function closemodal() {
    document.getElementById('.overlay').style.display = 'none';
}

// Show the popup immediately when the page is loaded
showmodal();

function showmodal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.center').classList.add('showcenter');
}
function closemodal(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.center').classList.remove('showcenter');
}

var c =document.querySelector("nav span");
c.addEventListener("click",closemodal)
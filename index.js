let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let manu = document.querySelector("#manu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");
// let videoBtn = document.querySelectorAll(".vid-btn");




// home section start
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('.ppk').src = src;

    });

});



//

window.onscroll = () => {
    searchBar.classList.remove('fa-times');
    searchBar.classList.remove('active');
    manu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}


manu.addEventListener('click', () => {
    manu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});


searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});



var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3
        },
    }
});
const header = document.querySelector('header');
const menuBtn = document.querySelector('#menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('show-mobile-menu');
});

closeMenuBtn.addEventListener('click', () => {
  menuBtn.click();
});

var swiper = new Swiper('.slide-content', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

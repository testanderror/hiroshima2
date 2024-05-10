const header = document.querySelector('header');
const menuBtn = document.querySelector('#menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
//path
// const currentPagePath = window.location.pathname;
// // Language Settings
// const englishBtn = document.getElementById('englishBtn');
// const spanishBtn = document.getElementById('spanishBtn');
// // Links (fixed)
// const link1 = document.getElementById('link1');
// const link2 = document.getElementById('link2');
// const link3 = document.getElementById('link3');
// const link4 = document.getElementById('link4');

// // index.html

// const h1Index = document.getElementById('h1Index');
// const p1Index = document.getElementById('p1Index');
// const aIndex = document.getElementById('aIndex');

// englishBtn.addEventListener('click', english);
// spanishBtn.addEventListener('click', spanish);

// function english() {
//   link2.textContent = 'Reviews';
//   link3.textContent = 'Availability';
//   link4.textContent = 'Contact';
//   console.log('this is english');

//   h1Index.textContent = 'Discover Hiroshima';
//   p1Index.textContent =
//     'In Hiroshima and Miyajima you will witness history and beauty. We are locals and we know our beloved city. We will pick you up at Hiroshima train station in our own vehicle. Just hop on your Shinkansen from Osaka, Kyoto or Tokyo and you will get to this beautiful city.';
//   aIndex.innerHTML = 'Book Now <i class="ri-whatsapp-fill"></i>';
// }

// function spanish() {
//   link2.textContent = 'Testimonios';
//   link3.textContent = 'Disponibilidad';
//   link4.textContent = 'Contacto';
//   console.log('this is spanish');

//   h1Index.textContent = 'Descubre Hiroshima';
//   p1Index.textContent =
//     'En Hiroshima y Miyajima verás historia y belleza. Somos locales y conocemos nuestra querida ciudad. Te recogeremos de la estación Hiroshima en nuestro vehículo privado. Simplemente tomas tu Shinksansen desde Osaka, Kyoto o Tokyo y llegarás a esta maravillosa ciudad.';
//   aIndex.innerHTML = 'Agendar Tour <i class="ri-whatsapp-fill"></i>';
// }
// // function english() {
//   console.log('This is english button');
//   if (currentPagePath === './index.html') {
// h1Index.textContent = 'Discover Hiroshima';
// p1Index.textContent =
//   'In Hiroshima and Miyajima you will witness history and beauty. We are locals and we know our beloved city. We will pick you up at Hiroshima train station in our own vehicle. Just hop on your Shinkansen from Osaka, Kyoto or Tokyo and you will get to this beautiful city.';
// aIndex.innerHTML = 'Book Now <i class="ri-whatsapp-fill"></i>';

//   } else if (currentPagePath === './testimonios.html') {
//     link2.textContent = 'Reviews';
//     link3.textContent = 'Availability';
//     link4.textContent = 'Contact';
//   } else if (currentPagePath === './disponibilidad.html') {
//     link2.textContent = 'Reviews';
//     link3.textContent = 'Availability';
//     link4.textContent = 'Contact';
//   } else {
//     link2.textContent = 'Reviews';
//     link3.textContent = 'Availability';
//     link4.textContent = 'Contact';
//   }
// }

// function spanish() {
// }

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

// Calendar

// May is the 5th month (0-indexed)

// Function to get unavailable dates for a given month
// Function to get unavailable dates for a given month

// Initial calendar generation for the current month (May 2024)

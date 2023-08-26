/* MOBILE NAVIGATION */

const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open"); //Add or remove at the same time (toggle)
});

/* CAROUSEL */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* PRICING TOGGLE */
const pricing = document.querySelectorAll(".plan-price");
const toggleButtons = document.querySelectorAll('input[type="checkbox"]');

function togglePricing(event) {
  const index = Array.from(toggleButtons).indexOf(event.target);
  const prices = [
    ["$399", "$4199"],
    ["$649", "$6979"],
    ["$1199", "$9959"],
  ];

  const priceIndex = event.target.checked ? 1 : 0;
  pricing[index].textContent = prices[index][priceIndex];
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", togglePricing);
});

/* UPDATE YEAR IN FOOTER */
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

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
const toggleButton = document.querySelector("#toggle");

function togglePricing() {
  const prices = toggleButton.checked
    ? ["$4199", "$6979", "$9959"]
    : ["$399", "$649", "$1199"];
  for (let i = 0; i < pricing.length; i++) {
    pricing[i].textContent = prices[i];
  }
}

toggleButton.addEventListener("click", togglePricing);

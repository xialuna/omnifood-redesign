/* MOBILE NAVIGATION */
const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open"); //Add or remove at the same time (toggle)
});

/* SET SMOOTH SCROLLING ANIMATION ON ALL BROWSER */
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");

    //Scrolling to the top (href = #)
    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other sections
    if (href != "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation when you click
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

/* ADD STICKY NAVIGATION */
const heroSectionEl = document.querySelector(".hero-section");
const observe = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    /*add the "sticky" class list in body*/
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }

    /*remove "sticky" class list in body*/
    if (entry.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-115px",
  }
);
observe.observe(heroSectionEl);

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

/* ANIMATION*/

// For app demo image
const appImage = document.querySelectorAll(".app-img");
const observerOptions1 = {
  root: null,
  rootMargin: "-10px",
  threshold: 0.5,
};

const observe1 = new IntersectionObserver((entries, observe1) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-app-img");
      observe1.unobserve(entry.target);
    }
  });
}, observerOptions1);

appImage.forEach((image) => {
  observe1.observe(image);
});

//For slide left animation
const slideLeftEl = document.querySelector(".slideLeft");

function handleSlideLeft(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) slideLeftEl.classList.add("slideLeft-show");
  });
}

const slideLeftObserver = new IntersectionObserver(handleSlideLeft, {
  root: null,
  rootMargin: "20px",
  threshold: 0.5,
});

slideLeftObserver.observe(slideLeftEl);

// For slide up animation

const slideUpEl = document.querySelector(".slideUp");

function handleSlideUp(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) slideUpEl.classList.add("slideUp-show");
  });
}

const slideUpObserver = new IntersectionObserver(handleSlideUp, {
  root: null,
  rootMargin: "40px",
  threshold: 0,
});

slideUpObserver.observe(slideUpEl);

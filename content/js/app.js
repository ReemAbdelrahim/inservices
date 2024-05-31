
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.cardd');
let cardWidth = 0;
let currentIndex = 0;

function calculateCardWidth() {
  const containerWidth = carousel.offsetWidth;
  const cardMargin = parseFloat(getComputedStyle(cards[0]).marginRight);
  cardWidth = containerWidth / Math.ceil(containerWidth / (cards[0].offsetWidth + cardMargin));
}

function slideCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * cardWidth * 2}px)`;
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  slideCarousel();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  slideCarousel();
}

// Recalculate card width on window resize
window.addEventListener('resize', calculateCardWidth);

// Initial setup
calculateCardWidth();
slideCarousel();

// Button event listeners
document.querySelector('.next-btn').addEventListener('click', nextCard);
document.querySelector('.prev-btn').addEventListener('click', prevCard);




const carousel2 = document.querySelector('.carousel2');
const cardss = document.querySelectorAll('.carddd');
let cardWidth2 = 0;
let currentIndex2 = 0;

function calculateCardWidth2() {
  const containerWidth = carousel2.offsetWidth;
  const cardMargin = parseFloat(getComputedStyle(cardss[0]).marginRight);
  cardWidth2 = containerWidth / Math.ceil(containerWidth / (cardss[0].offsetWidth + cardMargin));
}

function slideCarousel2() {
  carousel2.style.transform = `translateX(-${currentIndex2 * cardWidth2}px)`;
}

function nextCard2() {
  currentIndex2 = (currentIndex2 + 1) % cardss.length;
  slideCarousel2();
}

function prevCard2() {
  currentIndex2 = (currentIndex2 - 1 + cardss.length) % cardss.length;
  slideCarousel2();
}

// Recalculate card width on window resize
window.addEventListener('resize', calculateCardWidth2);

// Initial setup
calculateCardWidth2();
slideCarousel2();

// Button event listeners
document.querySelector('.next-btnn').addEventListener('click', nextCard2);
document.querySelector('.prev-btnn').addEventListener('click', prevCard2);



const phoneInput = document.querySelector("#phoneInput");

  // Initialize intlTelInput
  const iti = window.intlTelInput(phoneInput, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js"
  });

  // Set initial country based on the user's location
  iti.promise.then(() => {
    const countryCode = iti.getSelectedCountryData().iso2;
    iti.setCountry(countryCode);
  });

  // Listen for the country change event
  phoneInput.addEventListener("countrychange", function() {
    const countryCode = iti.getSelectedCountryData().iso2;
    console.log("Selected country code:", countryCode);
  });

  const phoneInput2 = document.querySelector("#phoneInput2");

  // Initialize intlTelInput
  const iti2 = window.intlTelInput(phoneInput2, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js"
  });

  // Set initial country based on the user's location
  iti2.promise.then(() => {
    const countryCode2 = iti2.getSelectedCountryData().iso2;
    iti2.setCountry(countryCode2);
  });

  // Listen for the country change event
  phoneInput2.addEventListener("countrychange", function() {
    const countryCode2 = iti2.getSelectedCountryData().iso2;
    console.log("Selected country code:", countryCode2);
  });


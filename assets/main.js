const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

////Contact form////
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Clear previous errors
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(el => el.style.display = 'none');

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  let isValid = true;

  // Name validation
  if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '' || !emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Valid email is required';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (phone === '' || !phonePattern.test(phone)) {
      document.getElementById('phoneError').textContent = 'Valid phone number is required';
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
  }

  // Message validation
  if (message === '') {
      document.getElementById('messageError').textContent = 'Message is required';
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
  }

  if (isValid) {
      alert('Form submitted successfully!');
  }
});


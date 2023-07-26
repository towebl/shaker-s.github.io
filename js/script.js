let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('.menu-btn');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};



// Home slide
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




// Booking Pop up
const bookNowBtn = document.getElementById('book-now-btn');
const bookForm = document.getElementById('book-form');
const removeBtn = document.getElementById('remove-btn');
const slideImage = document.querySelector('.swiper-wrapper .slide');


bookNowBtn.addEventListener('click', () => {
  bookForm.classList.remove('hidden');
  slideImage.classList.toggle('active');
});

removeBtn.addEventListener('click', () => {
  bookForm.classList.add('hidden');
});

document.getElementById('booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  // You can add your code here to handle the form submission
  // For example, you can retrieve the form values like this:
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value;

  // Do something with the form values (e.g., send them to a server)
  console.log(name, email, date, message);

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('date').value = '';
  document.getElementById('message').value = '';

  // Hide the form
  bookForm.classList.add('hidden');
});


const hamburger = document.querySelector('.ham'),
      menu = document.querySelector('.menu');

//toggle menu and hamburger
hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('show');
    hamburger.classList.toggle('active')
})

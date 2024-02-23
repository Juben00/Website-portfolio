let slideIndex = 1;
const slides = document.getElementsByClassName("ach");

function showSlides(n) {
    let i;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

showSlides(slideIndex);

function plus(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

const parts = document.querySelectorAll('section');
const navs = document.querySelectorAll('nav a');

window.onscroll = () => {
  parts.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 300;
      let height = sec.offsetHeight ;
      let id = sec.getAttribute('id');
      
      if(top >= offset && top < offset + height) {
        navs.forEach(links => {
            links.classList.remove('active');
            document.querySelector('nav a[href *=' + id + ']').classList.add('active');
          });
      };
  });
};
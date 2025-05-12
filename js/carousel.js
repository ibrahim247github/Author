// ABOUT CAROUSEL
const carouselSlider = document.querySelector("#about__carousel__slider");
const nextBtn = document.querySelector("#carousel__next-btn");
const prevBtn = document.querySelector("#carousel__prev-btn");

carouselSlider.style.width = `${carouselSlider.childElementCount * 100}%`;

nextBtn.addEventListener("click", () => {
  nextSlide(carouselSlider);
});

prevBtn.addEventListener("click", () => {
  prevSlide(carouselSlider);
});

// BLOG CAROUSEL
const blogCarouselSlider = document.querySelector("#blog__carousel__slider");
blogCarouselSlider.style.width = `${
  blogCarouselSlider.childElementCount * 100
}%`;

const blogNextBtn = document.querySelector("#blog__carousel__next-btn");
const blogPrevBtn = document.querySelector("#blog__carousel__prev-btn");

blogNextBtn.addEventListener("click", () => {
  nextSlide(blogCarouselSlider);
});

blogPrevBtn.addEventListener("click", () => {
  prevSlide(blogCarouselSlider);
});

// CLIENT CAROUSEL
const clientCarouselSlider = document.getElementById(
  "client__carousel__slider"
);
clientCarouselSlider.style.width = `${
  clientCarouselSlider.childElementCount * 100
}%`;

const clientNextBtn = document.getElementById("client__carousel__next-btn");
const clientPrevBtn = document.getElementById("client__carousel__prev-btn");

clientNextBtn.addEventListener("click", () => {
  nextSlide(clientCarouselSlider);
});

clientPrevBtn.addEventListener("click", () => {
  prevSlide(clientCarouselSlider);
});

// FUNCTIONS
function nextSlide(carouselSlider) {
  carouselSlider.classList.add("carousel-transition");
  carouselSlider.style.transform = `translateX(-${
    (1 / carouselSlider.childElementCount) * 100
  }%)`;

  setTimeout(() => {
    const slide = carouselSlider.removeChild(carouselSlider.firstElementChild);
    carouselSlider.appendChild(slide);
    carouselSlider.classList.remove("carousel-transition");
    carouselSlider.style.transform = `translateX(0)`;
  }, 500);
}

function prevSlide(carouselSlider) {
  carouselSlider.classList.remove("carousel-transition");
  const slide = carouselSlider.removeChild(carouselSlider.lastElementChild);
  carouselSlider.insertBefore(slide, carouselSlider.firstElementChild);
  carouselSlider.style.transform = `translateX(-${
    (1 / carouselSlider.childElementCount) * 100
  }%)`;

  setTimeout(() => {
    carouselSlider.classList.add("carousel-transition");
    carouselSlider.style.transform = `translateX(0)`;
  }, 100);
}

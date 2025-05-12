const menuToggler = document.querySelector(".menu-toggler");
const menuTogglerIcon = document.querySelector(".menu-toggler__icon");
const menu = document.querySelector(".menu");

menuToggler.addEventListener("click", () => {
  menuTogglerIcon.classList.toggle("is-open");
  menu.classList.toggle("is-open");

  if (menu.classList.contains("is-open")) {
    document.body.classList.add("scroll-disabler");
  } else {
    document.body.classList.remove("scroll-disabler");
  }
});

const ratingIconContainers = document.querySelectorAll(".books__col__rating");
ratingIconContainers.forEach((iconContainer) => {
  const icons = iconContainer.querySelectorAll(".rating__icon");
  icons.forEach((icon, index, iconList) => {
    icon.addEventListener("mouseover", () => {
      for (let i = 0; i <= index; i++) {
        iconList[i].classList.add("active");
      }
    });

    icon.addEventListener("mouseout", () => {
      for (let i = 0; i < iconList.length; i++) {
        iconList[i].classList.remove("active");
      }
    });
  });
});

const counterSection = document.querySelector(".counter");
const counterSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter();
      counterSectionObserver.unobserve(entry.target);
    }
  });
});

counterSectionObserver.observe(counterSection);

function startCounter() {
  const counters = document.querySelectorAll(".counter__col__header");

  counters.forEach((counter) => {
    let number = 0;
    const targetNumber = Number(counter.dataset.count);
    const duration = 2000;
    const milliseconds = duration / targetNumber;
    const interval = setInterval(() => {
      counter.textContent = `${number++}`;
      if (number > targetNumber) {
        clearInterval(interval);
      }
    }, milliseconds);
  });
}

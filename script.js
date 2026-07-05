console.log("JS loaded");

const dot = document.querySelector(".cursor-dot");

if (dot) {
  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    dotX += (mouseX - dotX) * 0.2;
    dotY += (mouseY - dotY) * 0.2;

    dot.style.left = dotX + "px";
    dot.style.top = dotY + "px";

    requestAnimationFrame(animate);
  }

  animate();
}

/* Duolingo Slideshow */

const duolingoPages = [
  "Duolingo1.png",
  "Duolingo2.png",
  "Duolingo3.png",
  "Duolingo4.png"
];

let duolingoIndex = 0;

const duolingoImage = document.getElementById("duolingo-image");
const prevDuo = document.querySelector(".prev-duo");
const nextDuo = document.querySelector(".next-duo");

function showDuolingoPage(index) {
  duolingoImage.src = duolingoPages[index];
}

prevDuo.addEventListener("click", () => {
  if (duolingoIndex > 0) {
    duolingoIndex--;
    showDuolingoPage(duolingoIndex);
  }
});

nextDuo.addEventListener("click", () => {
  if (duolingoIndex < duolingoPages.length - 1) {
    duolingoIndex++;
    showDuolingoPage(duolingoIndex);
  }
});

showDuolingoPage(duolingoIndex);

// about page - scroll effects

window.addEventListener("DOMContentLoaded", () => {

  console.log("observer init");

  const reveals = document.querySelectorAll(".reveal");

  console.log("reveal elements:", reveals.length);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  reveals.forEach((el) => observer.observe(el));

});

// Axis Section - Book Slideshow

document.addEventListener("DOMContentLoaded", () => {

  const pages = [
    "Axis1.png",
    "Axis2.png",
    "Axis3.png",
    "Axis4.png",
    "Axis5.png"
  ];

  let currentPage = 0;

  const image = document.getElementById("page-image");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showPage(index) {
    image.src = pages[index];
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  showPage(currentPage);

});

// Co-operative Section - Book Slideshow

const cooperativePages = [
  "CoBank1.png",
  "CoBank2.png",
  "CoBank3.png",
  "CoBank4.png",
  "CoBank5.png"
];

let cooperativeIndex = 0;

const cooperativeImage = document.getElementById("cooperative-image");
const prevCoop = document.querySelector(".prev-coop");
const nextCoop = document.querySelector(".next-coop");

function showCooperativePage(index) {
  cooperativeImage.src = cooperativePages[index];
}

prevCoop.addEventListener("click", () => {
  if (cooperativeIndex > 0) {
    cooperativeIndex--;
    showCooperativePage(cooperativeIndex);
  }
});

nextCoop.addEventListener("click", () => {
  if (cooperativeIndex < cooperativePages.length - 1) {
    cooperativeIndex++;
    showCooperativePage(cooperativeIndex);
  }
});

showCooperativePage(cooperativeIndex);

// twix section - book slideshow 

const twixPages = [
  "Twix1.png",
  "Twix2.png",
  "Twix3.png",
  "Twix4.png",
  "Twix5.png"
];

let twixIndex = 0;

const twixImage = document.getElementById("twix-image");
const prevTwix = document.querySelector(".prev-twix");
const nextTwix = document.querySelector(".next-twix");

function showTwixPage(index) {
  twixImage.src = twixPages[index];
}

prevTwix.addEventListener("click", () => {
  if (twixIndex > 0) {
    twixIndex--;
    showTwixPage(twixIndex);
  }
});

nextTwix.addEventListener("click", () => {
  if (twixIndex < twixPages.length - 1) {
    twixIndex++;
    showTwixPage(twixIndex);
  }
});

showTwixPage(twixIndex);

// Duo 2 section - book slideshow

const duo2Pages = [
  "Duo1.png",
  "Duo2.png",
  "Duo3.png",
  "Duo4.png",
  "Duo5.png"
];

let duo2Index = 0;

const duo2Image = document.getElementById("duo2-image");
const prevDuo2 = document.querySelector(".prev-duo2");
const nextDuo2 = document.querySelector(".next-duo2");

function showDuo2Page(index) {
  duo2Image.src = duo2Pages[index];
}

prevDuo2.addEventListener("click", () => {
  if (duo2Index > 0) {
    duo2Index--;
    showDuo2Page(duo2Index);
  }
});

nextDuo2.addEventListener("click", () => {
  if (duo2Index < duo2Pages.length - 1) {
    duo2Index++;
    showDuo2Page(duo2Index);
  }
});

showDuo2Page(duo2Index);
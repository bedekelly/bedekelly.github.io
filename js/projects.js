let step = 0;
let time = 0;
let topCar = document.getElementById("top-metro-car");
let bottomCar = document.getElementById("bottom-metro-car");

function animateTop() {
  let newTime = Date.now() / 1000;
  step += (newTime - time) / window.innerHeight * 300;
  time = newTime;
  let fraction = (1 + Math.sin(step))/2;
  let minus = fraction * 30;
  let left = `calc(${fraction * 100}% - ${minus}px)`;
  topCar.style.left = left;
  requestAnimationFrame(animateTop);
}

requestAnimationFrame(animateTop);

function animateBottom() {
  let newTime = Date.now() / 1000;
  step += (newTime - time) / window.innerHeight * 300;
  time = newTime;
  let fraction = 1 - (1 + Math.sin(step))/2;
  let minus = fraction * 30;
  let left = `calc(${fraction * 100}% - ${minus}px)`;
  bottomCar.style.left = left;
  requestAnimationFrame(animateBottom);
}

requestAnimationFrame(animateBottom);


function collapse(section) {
  section.classList.remove("expanded");
  section.classList.add("collapsed");
  for (let a of section.getElementsByClassName("project")) {
    a.style.display = "none";
  }
}

function expand(section) {
  section.classList.add("expanded");
  section.classList.remove("collapsed");
  for (let a of section.getElementsByClassName("project")) {
    a.style.display = "initial";
  }
}

function toggleVisible(target) {
  let section = target.parentElement;
  if (section.classList.contains("expanded")) {
    collapse(section);
  } else {
    expand(section);
  }
}
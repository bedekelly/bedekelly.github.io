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
let currentIndex = 0;
const sections = document.querySelectorAll("main > section");
const totalSections = sections.length;

function showSection(index) {
  sections.forEach((section, i) => {
    section.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function nextSection() {
  currentIndex = (currentIndex + 1) % totalSections;
  showSection(currentIndex);
}

setInterval(nextSection, 300);

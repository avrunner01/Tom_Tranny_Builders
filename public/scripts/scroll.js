const scrollContainer = document.querySelector('.scroll-container');
let direction = 1;

function autoScroll() {
  scrollContainer.scrollLeft += direction * 1.5;

  if (
    scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth ||
    scrollContainer.scrollLeft <= 0
  ) {
    direction *= -1;
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();

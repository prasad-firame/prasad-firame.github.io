const items = document.querySelectorAll('.timeline-item');

function checkPosition() {
  const windowBottom = window.innerHeight;
  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if(itemTop < windowBottom - 50) {
      item.classList.add('in-view');
    }
  });
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('load', checkPosition);

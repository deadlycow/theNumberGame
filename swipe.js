let touchstartX = 0;
let touchendX = 0;

const restartButton = document.querySelector('#restart');
const innerChev = document.querySelectorAll('.inner-chev');
const spanButton = document.querySelector('#spanButton');

let isButtonVisible = false;

function handleSwipe() {
  const swipeDistance = touchendX - touchstartX;
  
  if (swipeDistance > 60 && !isButtonVisible) {
    toggleButton();
  } 
  else if (swipeDistance < -60 && isButtonVisible) {
    toggleButton(); 
  }
}

function toggleButton() {
  isButtonVisible = !isButtonVisible;
  restartButton.style.transform = isButtonVisible ? 'translateX(0)' : 'translateX(-100%)';
  innerChev.forEach(chev => {
    chev.classList.toggle('rotate');
  })
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  handleSwipe();
});

spanButton.addEventListener('click', e => {
  e.stopPropagation();
  toggleButton();
});
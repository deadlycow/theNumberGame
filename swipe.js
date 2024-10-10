let touchstartX = 0;
let touchendX = 0;

const restartButton = document.querySelector('#restart');
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
  restartButton.classList.toggle('rotate');
}

document.addEventListener('touchstart', (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleSwipe();
});

restartButton.addEventListener('click', toggleButton);
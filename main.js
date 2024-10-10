const listButtons = document.querySelector('#btn-list');
// const randomNr = Math.floor(Math.random() * 9) + 1;
const randomNr = 1;
let gameMode2 = JSON.parse(localStorage.getItem('hard')) || false;
// let gameMode2 = false;

if (gameMode2) {
  listButtons.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
  createButtons(99);
}
else if (!gameMode2) {
  listButtons.style.gridTemplateColumns = 'repeat(3), 1fr';
  createButtons(9);
}

const newButtons = document.querySelectorAll('.btn');
const resetGame = document.querySelector('#restart');

newButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault;
    button.classList.add('clicked');

    if (button.textContent == randomNr) {
      theyWon();
    }
  })
})

function createButtons(value) {
  for (let i = 1; i <= value; i++) {
    let button = document.createElement('button');
    button.classList = 'btn';
    
    let listItem = document.createElement('li');
    listItem.style.display = 'flex';
    button.textContent = i;
    
    listItem.append(button);
    listButtons.append(listItem);
  }
}

function theyWon() {
  document.querySelector('.win-container').classList.add('animation');
  
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('overlay');
  overlay.style.display = 'block';
}

document.querySelector('#harder').addEventListener('click', () => {
  location.reload();
  localStorage.setItem('hard', JSON.stringify(true));
})

resetGame.addEventListener('click', (e) => {
  localStorage.removeItem('hard');
  location.reload();
});

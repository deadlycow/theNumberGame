let a = JSON.parse(localStorage.getItem('quantity')) || 9;
const listButtons = document.querySelector('#btn-list');

const randomNr = Math.floor(Math.random() * a) + 1;
// const randomNr = '1';

let gameMode2 = JSON.parse(localStorage.getItem('hard')) || false;
console.log(`Just so we can cheat: ${randomNr}`);



const mediaQuery = window.matchMedia('(width > 500px)');

function handleMediaChange(e) {
  if (e.matches && !gameMode2) {
    listButtons.style.gridTemplateColumns = 'repeat(3, minmax(100px, 1fr))';
  }
  else {
    listButtons.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
  }
}

handleMediaChange(mediaQuery);

mediaQuery.addEventListener('change', handleMediaChange);


if (gameMode2) {
  createButtons(199);
  document.querySelector('.container').style.width = '100%';
}
else if (!gameMode2) {
  createButtons(9);
}

const newButtons = document.querySelectorAll('.btn');
const resetGame = document.querySelector('#restart');

newButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault;
    button.classList.add('clicked');

    if (button.textContent == randomNr) theyWon(gameMode2);

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

const winContainer = document.querySelector('.win-container');

function theyWonHardmode() {
  // remove items to display final win
  winContainer.querySelectorAll('p').forEach(i => { i.remove(); });
  winContainer.querySelector('#harder').removeEventListener('click', hardModeReload);

  // makes changes to final win screen
  winContainer.querySelector('h2').textContent = 'You WIN hardmode';
  winContainer.lastElementChild.textContent = 'here\'s a cookie';
  winContainer.lastElementChild.classList.replace('btn-red', 'btn-cookie');
  winContainer.appendChild(document.querySelector('#restart'));
  winContainer.lastElementChild.classList.replace('restart', 'restart-mini');

}

function theyWon(value) {
  winContainer.classList.add('animation');

  if (value) theyWonHardmode();

  document.querySelector('.overlay').style.display = 'block';
}

function hardModeReload() {
  location.reload();
  localStorage.setItem('hard', JSON.stringify(true));
  localStorage.setItem('quantity', JSON.stringify(199));
}

document.querySelector('#harder').addEventListener('click', hardModeReload);

resetGame.addEventListener('click', (e) => {
  localStorage.removeItem('hard');
  localStorage.removeItem('quantity');
  location.reload();
});

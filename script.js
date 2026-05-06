const accessPage = document.getElementById('accessPage');
const mainPage = document.getElementById('mainPage');
const enterButton = document.getElementById('enterButton');
const accessMessage = document.getElementById('accessMessage');
const specialDate = document.getElementById('specialDate');
const primaryText = document.getElementById('primaryText');
const heartButton = document.getElementById('heartButton');
const afterClick = document.getElementById('afterClick');
const finalButton = document.getElementById('finalButton');
const magicHearts = document.getElementById('magicHearts');
const finalPage = document.getElementById('finalPage');
const touchButton = document.createElement('button');
touchButton.id = 'touchButton';
touchButton.className = 'button button--touch';
touchButton.textContent = 'Me toca ❤️';

const correctDate = '2024-11-16';
const firstMessage = `Entre o silêncio do mundo e o ruído dos dias,
há um lugar onde tudo se torna leve…
esse lugar és tu.`;

function showPage(page) {
  accessPage.style.display = 'none';
  mainPage.style.display = 'none';
  page.style.display = 'flex';
  page.classList.add('active');
}

function resetAccess() {
  accessMessage.textContent = 'Uma viagem de emoção começa quando descobrimos a data certa.';
  accessMessage.style.color = 'rgba(244, 244, 248, 0.78)';
}

enterButton.addEventListener('click', () => {
  const selected = specialDate.value;
  if (selected === correctDate) {
    accessPage.classList.remove('active');
    setTimeout(() => showPage(mainPage), 300);
    startExperience();
  } else {
    accessMessage.textContent = 'Hmm… essa não é a data que guardo no coração 💔';
    accessMessage.style.color = '#ff8fb6';
  }
});

function typewriter(text, element, delay = 45) {
  element.textContent = '';
  element.style.opacity = '1';
  let index = 0;
  const interval = setInterval(() => {
    element.textContent += text[index] || '';
    index += 1;
    if (index > text.length) {
      clearInterval(interval);
    }
  }, delay);
}

function revealAfterClick() {
  afterClick.classList.remove('hidden');
  const slowTexts = afterClick.querySelectorAll('.slow-text');
  slowTexts.forEach((item, index) => {
    item.classList.add('fade-in');
    item.style.animationDelay = `${0.5 + index * 0.6}s`;
  });
  const messageBox = document.querySelector('.message-box');
  messageBox.appendChild(touchButton);
}

function startExperience() {
  primaryText.classList.remove('fade-in');
  primaryText.style.opacity = '0';
  setTimeout(() => {
    typewriter(firstMessage, primaryText, 50);
    primaryText.classList.add('fade-in');
  }, 250);
}

heartButton.addEventListener('click', () => {
  document.body.style.background = 'radial-gradient(circle at center, rgba(255, 77, 109, 0.18), transparent 24%), linear-gradient(180deg, #02020b 0%, #0b0c10 100%)';
  heartButton.classList.add('fade-in');
  heartButton.disabled = true;
  revealAfterClick();
});

finalButton.addEventListener('click', () => {
  finalButton.disabled = true;
  releaseMagicHearts();
});

touchButton.addEventListener('click', () => {
  touchButton.disabled = true;
  showPage(finalPage);
});

touchButton.addEventListener('click', () => {
  touchButton.disabled = true;
  mainPage.classList.remove('active');
  finalPage.classList.add('active');
});

function releaseMagicHearts() {
  const numHearts = 200; // Simulando "milhões" com 200 corações para performance
  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement('div');
    heart.className = 'magic-heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 0.5 + 's';
    heart.style.animationDuration = (1.5 + Math.random() * 0.5) + 's';
    magicHearts.appendChild(heart);
  }
  setTimeout(() => {
    magicHearts.innerHTML = '';
  }, 2000);
}

specialDate.addEventListener('input', resetAccess);

window.addEventListener('load', () => {
  showPage(accessPage);
});

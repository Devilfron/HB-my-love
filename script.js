 let heartsStarted = false;
 let messageShown = false;

 function showMessage() {
  // Запускаем музыку
  const audio = document.getElementById('cardAudio');
  const btn = document.querySelector('button');
  if (audio) {
    if (audio.paused) {
      audio.volume = 0.3;
      // Перематываем на 0.2 сек только при самом первом запуске
      if (audio.currentTime === 0) {
        audio.currentTime = 2;
      }
      audio.play().catch(error => console.log("Ошибка аудио:", error));
      btn.textContent = 'Пауза ❚❚';
    } else {
      audio.pause();
      btn.textContent = 'Продолжить музыку ▶';
    }
  }
  // Показываем поздравление на странице без блокировки браузера
  
    if (!messageShown) {
    const msg = document.createElement('div');
    msg.id = 'surpriseMessage';
    msg.textContent = 'Ура! Пусть этот день будет самым лучшим! 💖';

    const btn = document.querySelector('button');
    btn.insertAdjacentElement('afterend', msg);
    messageShown = true;
  }

  // Запускаем анимацию сердечек (только один раз, чтобы они не ускорялись при повторном клике)
  if (!heartsStarted) {
    setInterval(createHeart, 200);
    heartsStarted = true;
  }
}  
 
 function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Список символов (можно добавить сколько угодно сердечек и снежинок)
  const symbols = ['❤️', '💖', '❅'];
  heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  // Отступ от 2% до 95% ширины экрана
  heart.style.left = (Math.random() * 93 + 2) + 'vw';
  // Плавная скорость (от 3.5 до 5.5 секунд с долями секунды вместо целых чисел)
  const duration = Math.random() * 2 + 3;
  heart.style.animationDuration = duration.toFixed(2) + 's';
  // Случайный размер обьема
  heart.style.fontSize = Math.floor(Math.random() * 16 + 18) + 'px';
  
  document.body.appendChild(heart);

  // heart.style.animationDuration = (Math.floors || Math.floor)(Math.random() * 3 + 2) +'s';

document.body.appendChild(heart);

  setTimeout(() => { 
   heart.remove();
  }, duration * 4000);
}
  // setInterval(createHeart, 400);
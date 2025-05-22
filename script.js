function startCountdown() {
  const targetDate = new Date("2025-06-01T00:00:00").getTime(); // 1 червня 2025
  const timerElement = document.getElementById("timer");

  function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      timerElement.innerHTML = "Пірати виходятьу плавання!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerElement.innerHTML = `⏳ ${days} дн.  ${hours} год.  ${minutes} хв.  ${seconds} сек.`;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

startCountdown();

// Функція для показу прихованого тексту
function toggleText() {
  const hiddenText = document.getElementById("hiddenText");
  const button = document.getElementById("revealButton");

  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
    button.textContent = "Сховати Сєрого";
  } else {
    hiddenText.style.display = "none";
    button.textContent = "Показати";
  }
}

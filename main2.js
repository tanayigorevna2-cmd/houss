 document.getElementById('saveBtn').addEventListener('click', () => {
    alert('Помічника збережено!');
    // Тут можна додати код для збереження, наприклад у localStorage
  });

  // Кнопка "Поділитися"
  document.getElementById('shareBtn').addEventListener('click', async () => {
    if (navigator.share) {
      // Вбудована функція поділитися (працює на телефонах)
      await navigator.share({
        title: 'Мій онлайн-помічник',
        text: 'Поглянь на мого онлайн-помічника!',
        url: window.location.href
      });
    } else {
      // Якщо браузер не підтримує
      alert('Функція поділитися не підтримується цим браузером.');
    }
  });
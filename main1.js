
 document.querySelectorAll('.cards').forEach(card => {
    const btn = card.querySelector('.cards-btn');
    const txt = card.querySelector('.cards-text');

    btn.addEventListener('click', () => {
      const expanded = card.classList.toggle('expanded');
      btn.textContent = expanded ? 'Згорнути' : 'Читати більше';
      btn.setAttribute('aria-expanded', expanded);
      // для плавного скролу на мобілці можна додати:
      if (expanded) txt.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
  /////////////////////////////////////////////////////////////////////////////
const openBtn = document.getElementById('openFormBtn');
const form = document.getElementById('helperForm');
const submitBtn = document.getElementById('submitForm');

// Відкрити або закрити форму
openBtn.addEventListener('click', () => {
  form.style.display = form.style.display === 'block' ? 'none' : 'block';
});

// Коли натискаємо "Створити", форма зникає і очищується
submitBtn.addEventListener('click', () => {
  alert("Ваш помічник створений!"); // можна прибрати, якщо не потрібно
  form.style.display = 'none';
  document.getElementById('helperName').value = '';
  document.getElementById('helperTask').value = '';
});
  
  // Зірочка Вибране
  const favBtn = document.getElementById('favoriteBtn');
  const starIcon = favBtn.querySelector('i');
  favBtn.addEventListener('click', () => {
    starIcon.classList.toggle('bi-star');
    starIcon.classList.toggle('bi-star-fill');
  });

  // Мобільне меню
  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.style.display = 'block';
  });

  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.style.display = 'none';
  });
  ///////////////////////////////////////////////////


 
const cards = document.querySelectorAll('.card-small');

  function showCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach((card, i) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        // додаємо невелику затримку, щоб картки з’являлися по черзі
        setTimeout(() => card.classList.add('show'), i * 150);
      }
    });
  }

  window.addEventListener('scroll', showCardsOnScroll);
  showCardsOnScroll(); // запуск при завантаженні
  //////////////////////////////////////////////////////////

 
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".info-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});

//////////////////////////////////////////////////////////////

document.addEventListener("scroll", () => {
  const items = document.querySelectorAll(".works-item, .works-right");
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("show");
    }
  });
});
//////////////////////////////////////////////////////////////////
function findMaster(service) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            // Формуємо URL Google Maps пошуку поруч з твоєю локацією
            const url = `https://www.google.com/maps/search/${encodeURIComponent(service)}/@${lat},${lon},14z`;
            window.open(url, '_blank'); // відкриває Google Maps в новій вкладці
        }, function(error) {
            alert("Не вдалося визначити ваше місце розташування.");
        });
    } else {
        alert("Геолокація не підтримується вашим браузером.");
    }
}
////////////////////////////////////////////////////
const favBtn1 = document.getElementById('favoriteBtn1');
const starIcon1 = favBtn1.querySelector('i');
favBtn1.addEventListener('click', () => {
  starIcon1.classList.toggle('bi-star');
  starIcon1.classList.toggle('bi-star-fill');
});

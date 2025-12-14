//HTTP запит
import axios from 'axios';
import swiper from 'swiper';

document.addEventListener('DOMContentLoaded', async () => {
  const list = document.querySelector('.feedbacks-list');
  if (!list) return;

  try {
    const response = await fetch(
      'https://paw-hut.b.goit.study/api/feedbacks?limit=5'
    );

    if (!response.ok) {
      throw new Error(`Помилка: ${response.status}`);
    }

    const data = await response.json();
    const feedbacks = data.feedbacks;

    // Додаємо клас swiper-slide до кожного <li>
    const items = feedbacks
      .map(
        item => `
      <li class="swiper-slide">
        <p class="swiper-slide-feedbacks">${item.description}</p>
        <p class="swiper-slide-author">${item.author}</p>
      </li>
    `
      )
      .join('');

    list.innerHTML = items;

    // Ініціалізуємо Swiper після вставки контенту
    new Swiper('.success-content', {
      slidesPerView: 1, // По 1 слайду на екрані (картка)
      spaceBetween: 20, // Відстань між слайдами
      loop: true, // Зациклений слайдер
      pagination: {
        el: '.swiper-pagination', // Пагинація (крапки)
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next', // Кнопка вперед
        prevEl: '.swiper-button-prev', // Кнопка назад
      },
      breakpoints: {
        // Адаптив: на десктопі показувати більше слайдів, якщо хочеш
        768: { slidesPerView: 2 },
        1440: { slidesPerView: 3 },
      },
    });
  } catch (error) {
    console.error('Помилка запиту:', error);
    list.innerHTML =
      '<li>Не вдалося завантажити відгуки. Перевірте консоль.</li>';
  }
});

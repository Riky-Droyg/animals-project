const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.burger-menu__close');
const links = document.querySelectorAll('.burger-menu a');

function openMenu() {
  burgerMenu.classList.add('is-open');
  burgerBtn.classList.add('is-hidden'); // додаємо клас, щоб приховати кнопку
  document.body.style.overflow = 'hidden'; // блокуємо скрол
}

function closeMenu() {
  burgerMenu.classList.remove('is-open');
  burgerBtn.classList.remove('is-hidden'); // показуємо кнопку знову
  document.body.style.overflow = ''; // розблоковуємо скрол
}

burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Закриття при кліку поза меню
burgerMenu.addEventListener('click', (e) => {
  if (e.target === burgerMenu) closeMenu();
});

// Закриття по Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// Закриття при кліку на посилання
links.forEach(link => link.addEventListener('click', closeMenu));

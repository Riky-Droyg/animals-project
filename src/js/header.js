import { btnTop } from './scroll-btn';

const modalMenuHeader = document.querySelector('.modal-menu');
const buttonHeaderBurger = document.querySelector('.header__burger');
const links = document.querySelectorAll('.modal-menu__nav a');
const header = document.querySelector('.header');
const modalMenuButton = document.querySelector('.modal-menu__button');

export function isOpen() {
  return modalMenuHeader.classList.contains('modal-menu--open');
}

function openMenu() {
  modalMenuHeader.classList.add('modal-menu--open');
  buttonHeaderBurger.classList.add('is-open');
  buttonHeaderBurger.setAttribute('aria-expanded', 'true');
  document.body.classList.add('no-scroll');
  btnTop.classList.add('is-hidden');
  header?.classList.remove('header__blur');
  addEventClouseEsc();
}

function closeMenu() {
  modalMenuHeader.classList.remove('modal-menu--open');
  buttonHeaderBurger.classList.remove('is-open');
  buttonHeaderBurger.setAttribute('aria-expanded', 'false');
  btnTop.classList.remove('is-hidden');
  document.body.classList.remove('no-scroll');
  header?.classList.add('header__blur');
  removeEventClouseEsc();
}

function toggleMenu() {
  btnTop.classList.add('is-hidden');
  isOpen() ? closeMenu() : openMenu();
}

buttonHeaderBurger.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});
document.addEventListener('click', e => {
  if (!isOpen()) return;
  const clickedBurger = e.target.closest('.header__burger');
  const clickedInsidePanel = e.target.closest('.modal-menu__container');

  if (!clickedBurger && !clickedInsidePanel) closeMenu();
});

links.forEach(link => link.addEventListener('click', closeMenu));
modalMenuButton.addEventListener('click', closeMenu);

function onEscClose(e) {
  if (e.key !== 'Escape' && e.code !== 'Escape') return;
  if (!isOpen()) return;
  closeMenu();
}

function addEventClouseEsc() {
  document.addEventListener('keydown', onEscClose);
}
function removeEventClouseEsc() {
  document.removeEventListener('keydown', onEscClose);
}

import { isOpen } from "./header";


export const btnTop = document.querySelector("#scrollToTop");
window.addEventListener('scroll', () => {
  if(isOpen()) {
    btnTop.classList.add("is-hidden");
    return;
  }
  const scrollTop = window.scrollY; 
  if (scrollTop > 100) {
    btnTop.classList.remove("is-hidden");
  } else {
    btnTop.classList.add("is-hidden");
  }
}
);
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const mainOutlet = document.querySelector(`section.main`);

export default function renderScreen(screenElement) {
  mainOutlet.innerHTML = ``;
  mainOutlet.appendChild(screenElement);
}


const mainOutlet = document.querySelector(`section.main`);

export default function renderScreen(view) {
  mainOutlet.innerHTML = ``;
  mainOutlet.appendChild(view.element);
}

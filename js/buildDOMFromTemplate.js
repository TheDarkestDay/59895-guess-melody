

export default function buildDOMFromTemplate(template, wrapperClass) {
  const screenWrapper = document.createElement(`section`);
  screenWrapper.className = wrapperClass;
  screenWrapper.innerHTML = template;
  return screenWrapper;
}

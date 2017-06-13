
export default class AbstractView {
  constructor(viewContainerClass, props = {}) {
    this._element = ``;
    this.viewContainerClass = viewContainerClass;
    this.props = props;
  }

  get template() {
    throw new Error(`Abstract method should be implemented in children`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }

  bind() {}

  render() {
    const viewContainer = document.createElement(`section`);
    viewContainer.className = this.viewContainerClass;
    viewContainer.innerHTML = this.template;
    return viewContainer;
  }
}

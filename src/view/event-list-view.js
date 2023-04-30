import {createElement} from '../render.js';

const createEventListTemlpate = () => '<ul class="trip-events__list">';

export default class EventListView {
  getTemplate() {
    return createEventListTemlpate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

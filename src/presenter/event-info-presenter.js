import EventInfoView from '../view/event-info-view.js';
import {RenderPosition, render} from '../framework/render.js';

export default class EventInfoPresenter {
  #container = null;

  constructor({container}) {
    this.#container = container;
  }

  init() {
    render(new EventInfoView(), this.#container, RenderPosition.AFTERBEGIN);
  }
}

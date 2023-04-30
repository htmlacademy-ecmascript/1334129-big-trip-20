import EventInfoView from '../view/event-info-view.js';
import {RenderPosition, render} from '../render.js';

export default class EventInfoPresenter {

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new EventInfoView(), this.container, RenderPosition.AFTERBEGIN);
  }
}


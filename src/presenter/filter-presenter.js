import FilterView from '../view/filter-view.js';
import {render} from '../render.js';

export default class FilterPresenter {

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new FilterView(), this.container);
  }
}


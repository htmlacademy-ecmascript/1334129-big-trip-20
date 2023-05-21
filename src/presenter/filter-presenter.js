import FilterView from '../view/filter-view.js';
import {generateFilters} from '../mock/filter.js';
import {render} from '../framework/render.js';

export default class FilterPresenter {
  #container = null;
  #filters = null;

  constructor({container, eventsModel}) {
    this.#container = container;
    this.#filters = generateFilters(eventsModel.points);
  }

  init() {
    render(new FilterView({filters: this.#filters}), this.#container);
  }
}

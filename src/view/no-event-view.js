import AbstractView from '../framework/view/abstract-view.js';
import {FilterType} from '../const.js';

const NoEventsText = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now'
};

const createNoEventViewTemlpate = (filterType) =>
  `<p class="trip-events__msg">${NoEventsText[filterType]}</p>`;

export default class NoEventView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoEventViewTemlpate(this.#filterType);
  }
}

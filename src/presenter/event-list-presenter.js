import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import EventItemView from '../view/event-item-view.js';
import EventEditView from '../view/event-edit-view.js';
import {render} from '../framework/render.js';

export default class EventListPresenter {
  #eventListView = new EventListView();
  #container = null;
  #eventsModel = null;

  #events = null;
  #types = null;
  #destinations = null;
  #availableOffers = null;

  constructor({container, eventsModel}) {
    this.#container = container;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#events = [...this.#eventsModel.events];
    this.#types = [...this.#eventsModel.types];
    this.#destinations = [...this.#eventsModel.destinations];
    this.#availableOffers = this.#eventsModel.offers;

    render(new SortView(), this.#container);
    render(this.#eventListView, this.#container);

    const itemEdit = new EventEditView({
      event: this.#events[0],
      destinations: this.#destinations,
      availableOffers: this.#availableOffers
    });
    render(itemEdit, this.#eventListView.element);

    for (let i = 1; i < this.#events.length; i++) {
      this.#renderEvent(this.#events[i]);
    }
  }

  #renderEvent(event) {
    const itemView = new EventItemView({
      event,
      destinations: this.#destinations,
      availableOffers: this.#availableOffers
    });
    render(itemView, this.#eventListView.element);
  }
}

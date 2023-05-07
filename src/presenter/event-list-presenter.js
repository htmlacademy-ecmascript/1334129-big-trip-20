import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import EventItemView from '../view/event-item-view.js';
import EventEditView from '../view/event-edit-view.js';
import {render} from '../render.js';

export default class EventListPresenter {
  eventListView = new EventListView();

  constructor({container, eventsModel}) {
    this.container = container;
    this.eventsModel = eventsModel;
  }

  init() {
    this.events = [...this.eventsModel.getPoints()];
    this.types = [...this.eventsModel.getTypes()];
    // this.destinations = [...this.eventsModel.getDestinations()];
    this.availableOffers = this.eventsModel.getOffers();

    render(new SortView(), this.container);
    render(this.eventListView, this.container);

    const editEventView = new EventEditView({
      event: this.events[0],
      types: this.types,
      destinations: this.destinations,
      availableOffers: this.availableOffers
    });
    render(editEventView, this.eventListView.getElement());

    for (let i = 1; i < this.events.length; i++) {
      const itemView = new EventItemView({
        event: this.events[i],
        destinations: this.destinations,
        availableOffers: this.availableOffers
      });
      render(itemView, this.eventListView.getElement());
    }
  }
}

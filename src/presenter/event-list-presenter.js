import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import EventItemView from '../view/event-item-view.js';
import EventEditView from '../view/event-edit-view.js';
import {render} from '../render.js';

const ITEMS_QUANTITY = 3;

export default class EventListPresenter {
  eventListView = new EventListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new SortView(), this.container);
    render(this.eventListView, this.container);
    render(new EventEditView(), this.eventListView.getElement());

    for (let i = 0; i < ITEMS_QUANTITY; i++) {
      render(new EventItemView(), this.eventListView.getElement());
    }
  }
}


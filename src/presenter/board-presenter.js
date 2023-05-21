import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view.js';
import EventEditView from '../view/event-edit-view.js';
import {render, replace} from '../framework/render.js';
import NoEventView from '../view/no-event-view.js';

export default class BoardPresenter {
  #eventListView = new EventListView();
  #emptyListPoint = new NoEventView();
  #pointShortingComponent = new SortView();

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
    // this.#events = 0;
    this.#types = [...this.#eventsModel.types];
    this.#destinations = [...this.#eventsModel.destinations];
    this.#availableOffers = this.#eventsModel.offers;

    render(this.#pointShortingComponent, this.#container);
    render(this.#eventListView, this.#container);
    this.#renderBoard();
  }

  #renderEvent(event) {
    const itemEdit = new EventEditView({
      event,
      types: this.#types,
      destinations: this.#destinations,
      availableOffers: this.#availableOffers,
      onSubmitClick: itemSubmitClickHandler,
      onCloseClick: itemCloseClickHandler
    });

    const itemView = new PointView({
      event,
      types: this.#types,
      destinations: this.#destinations,
      availableOffers: this.#availableOffers,
      onEditClick: itemEditClickHandler
    });

    const replaceItemViewToEdit = () => {
      replace(itemEdit, itemView);
    };

    const replaceItemEditToView = () => {
      replace(itemView, itemEdit);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceItemEditToView();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    function itemEditClickHandler() {
      replaceItemViewToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function itemSubmitClickHandler() {
      replaceItemEditToView();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function itemCloseClickHandler() {
      replaceItemEditToView();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    render(itemView, this.#eventListView.element);
  }

  #renderBoard() {
    if (this.#events.length) {
      for (let i = 0; i < this.#events.length; i++) {
        this.#renderEvent(this.#events[i]);
      }
    } else {
      render(this.#emptyListPoint, this.#container);
    }
  }
}

import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import {render, remove} from '../framework/render.js';
import NoEventView from '../view/no-event-view.js';
import PointPresenter from './point-presenter.js';
import {sortByDate, sortByTime, sortByPrice} from '../utils/sort.js';
import {SortType} from '../const.js';
import {UserAction, UpdateType, FilterType, EmptyEvent} from '../const.js';
import {filter} from '../utils/filter.js';

export default class BoardPresenter {
  #pointListComponent = new EventListView(); //#eventListView
  #container = null;
  #eventsModel = null;
  #filterModel = null;
  #pointSortingComponent = null; //#SortView
  #emptyListPoint = null; //#noEventView
  #pointsPresenter = new Map(); //#eventPresenters
  #newPointPresenter = null; //#newEventPresenter
  #currentSortType = SortType.DAY;
  #filterType = FilterType.EVERYTHING;

  constructor({container, filterModel, eventsModel, onNewEventDestroy}) {
    this.#container = container;
    this.#eventsModel = eventsModel;
    this.#filterModel = filterModel;
    this.#filterType = this.#filterModel.filter;

    this.#newPointPresenter = new PointPresenter({
      container: this.#pointListComponent.element,
      onEventChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
      onNewEventDestroy
    });

    this.#eventsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  init() {
    this.#renderBoard();
  }

  createEvent () {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointPresenter.init({
      point: EmptyEvent,
      eventsModel: this.#eventsModel,
      newEvent: true});
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#eventsModel.points;
    const filteredEvents = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return filteredEvents.sort(sortByDate);
      case SortType.TIME:
        return filteredEvents.sort(sortByTime);
      case SortType.PRICE:
        return filteredEvents.sort(sortByPrice);
    }
    return filteredEvents;
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_EVENT:
        this.#eventsModel.updateEvent(updateType, update);
        break;
      case UserAction.ADD_EVENT:
        this.#eventsModel.addEvent(updateType, update);
        break;
      case UserAction.DELETE_EVENT:
        this.#eventsModel.deleteEvent(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => { //#handleModelEvent #handlePointChanga
    if (this.#filterType !== this.#filterModel.filter) {
      this.#currentSortType = SortType.DAY;
    }
    switch (updateType) {
      case UpdateType.MINOR:
        this.#pointsPresenter.get(data.id).init({
          point: data,
          eventsModel: this.#eventsModel
        });
        break;
      case UpdateType.MAJOR:
        this.#clearSort();
        this.#renderSort();
        this.#clearPointList();
        this.#renderPointList();
        break;
    }
  };

  #handleModeChange = () => {
    this.#pointsPresenter.forEach((presenter) => presenter.resetView());
    this.#newPointPresenter.resetView();
  };

  #renderNoPoints() {
    this.#emptyListPoint = new NoEventView({
      filterType: this.#filterType
    });
    render(this.#emptyListPoint, this.#container);
  }

  #renderSort() {
    this.#pointSortingComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#pointSortingComponent, this.#container);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#currentSortType = sortType;
    this.#clearPointList();
    this.#renderPointList();
  };

  #renderPointList() { //#renderEvents
    if (!this.points.length) {
      this.#renderNoPoints();
      return;
    }
    render(this.#pointListComponent, this.#container);
    this.points.forEach((point) => this.#renderPoint(point));
  }

  #renderPoint(point) { //#renderEvent
    const pointPresenter = new PointPresenter({
      container: this.#pointListComponent.element,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init({
      point,
      eventsModel: this.#eventsModel
    });
    this.#pointsPresenter.set(point.id, pointPresenter);
  }

  #clearPointList() {
    this.#pointsPresenter.forEach((presenter) => presenter.destroy());
    this.#pointsPresenter.clear();
    if (this.#emptyListPoint) {
      remove(this.#emptyListPoint);
    }
  }

  #clearSort() {
    if (this.#pointSortingComponent) {
      remove(this.#pointSortingComponent);
    }
  }

  #renderBoard() {
    if (!this.#eventsModel.points.length) {
      this.#renderNoPoints();
      return;
    }
    this.#renderSort();
    this.#renderPointList(); //#renderEvents
  }
}

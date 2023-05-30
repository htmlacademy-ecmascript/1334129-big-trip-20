import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import {render} from '../framework/render.js';
import NoEventView from '../view/no-event-view.js';
import PointPresenter from './point-presenter.js';
import {updateItem} from '../utils/common.js';
import {sortByDate, sortByTime, sortByPrice} from '../utils/sort.js';
import {SortType} from '../const.js';

export default class BoardPresenter {
  #pointListComponent = new EventListView();
  #container = null;
  #eventsModel = null;
  // #pointSortingComponent = new SortView();
  #pointSortingComponent = null; //SortView
  #emptyListPoint = new NoEventView();
  #points = null;
  #pointsPresenter = new Map();
  #currentSortType = null;

  constructor({container, eventsModel}) {
    this.#container = container;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#points = [...this.#eventsModel.points];
    this.#renderBoard();
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointsPresenter.get(updatedPoint.id).init({
      point: updatedPoint,
      eventsModel: this.#eventsModel
    });
  };

  #handleModeChange = () => {
    this.#pointsPresenter.forEach((presenter) => presenter.resetView());
  };

  #renderNoPoints() {
    render(this.#emptyListPoint, this.#container);
  }

  #renderSort() {
    this.#pointSortingComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#pointSortingComponent, this.#container);
    this.#sortEvents(SortType.DAY);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortEvents(sortType);
    this.#clearPointList();
    this.#renderPointList();
  }

  #sortEvents(sortType) {
    switch (sortType) {
      case SortType.DAY:
        this.#points.sort(sortByDate);
        break;
      case SortType.TIME:
        this.#points.sort(sortByTime);
        break;
      case SortType.PRICE:
        this.#points.sort(sortByPrice);
    }

    this.#currentSortType = sortType;
  }

  #renderPointList() {
    render(this.#pointListComponent, this.#container);
    this.#points.forEach((point) => this.#renderPoint(point));
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      container: this.#pointListComponent.element,
      onDataChange: this.#handlePointChange,
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
  }

  #renderBoard() {
    if (!this.#points.length) {
      this.#renderNoPoints();
      return;
    }
    this.#renderSort();
    this.#renderPointList();
  }
}

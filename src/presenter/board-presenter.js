import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import {render, RenderPosition} from '../framework/render.js';
import NoEventView from '../view/no-event-view.js';
import PointPresenter from './point-presenter.js';
import {updateItem} from '../utils/common.js';

export default class BoardPresenter {
  #pointListComponent = new EventListView();
  #container = null;
  #eventsModel = null;
  #pointShortingComponent = new SortView();
  #emptyListPoint = new NoEventView();
  #points = null;
  #pointsPresenter = new Map();

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
  }

  #handleModeChange = () => {
    this.#pointsPresenter.forEach((presenter) => presenter.resetView());
  };

  #renderNoPoints() {
    render(this.#emptyListPoint, this.#container);
  }

  #renderSort() {
    render(this.#pointShortingComponent, this.#container);
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

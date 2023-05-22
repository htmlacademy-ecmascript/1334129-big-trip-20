import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import {render, RenderPosition} from '../framework/render.js';
import NoEventView from '../view/no-event-view.js';
import PointPresenter from './point-presenter.js';
import {updateItem} from '../utils/common.js';

export default class BoardPresenter {
  #container = null;
  #eventsModel = null;
  #pointListComponent = new EventListView();
  #points = null;
  #pointShortingComponent = new SortView();
  #emptyListPoint = new NoEventView();
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
      eventsModel: this.eventsModel
    });
  }

  #renderShort() {
    render(this.#pointShortingComponent, this.#container, RenderPosition.AFTERBEGIN);
    render(this.#pointShortingComponent, this.#container);
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

  #renderNoPoints(){
    render(this.#emptyListPoint, this.#container, RenderPosition.AFTERBEGIN);
    render(this.#emptyListPoint, this.#container);
  }

  #clearPointList() {
    this.#pointsPresenter.forEach((presenter) => presenter.destroy());
    this.#pointsPresenter.clear();
  }

  #renderPointList() {
    render(this.#pointListComponent, this.#container);
  }

  #handleModeChange = () => {
    this.#pointsPresenter.forEach((presenter) => presenter.resetView());
  };

  #renderBoard() {
    if (this.#points.length) {
      for (let i = 0; i < this.#points.length; i++) {
        this.#renderPoint(this.#points[i]);
      }
    } else {
      this.#renderNoPoints();
      return;
    }
    this.#renderShort();
    this.#renderPointList();
  }
}

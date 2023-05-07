import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();

  constructor({container, destinationModel, offersModel, pointsModel}) {
    this.container = container;
    this.destinationModel = destinationModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;

    this.points = [...pointsModel.get()];
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.eventListComponent, this.container);

    render(
      new PointEditView({
        point: this.points[0],
        pointDestination: this.destinationModel.get(),
        pointOffers: this.offersModel.get()
      }),
      this.eventListComponent.getElement()
    );

    this.points.forEach((point) => {
      render(
        new PointView({
          point,
          ointDestination: this.destinationModel.getById(point.pointDestination),
          pointOffers: this.offersModel.getByType(point.type)
        }),
        this.eventListComponent.getElement()
      );
    });
  }
}

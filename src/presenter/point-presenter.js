import {render, replace, remove, RenderPosition} from '../framework/render.js';
import PointView from '../view/point-view.js';
import EventEditView from '../view/event-edit-view.js';
import {UserAction, UpdateType} from '../const.js';

export default class PointPresenter {
  #pointComponent = null;
  #container = null;
  #pointEditComponent = null;
  #handlePointChange = null; //handleEventChange
  #handleModeChange = null; //handleModeChange
  #handleNewEventDestroy = null;

  #editMode = false;
  #newEvent = false;

  #point = null;
  #types = null;
  #destinations = null;
  #availableOffers = null;
  #offersByType = [];
  #eventsModel = null;

  constructor({container, onDataChange, onModeChange, onNewEventDestroy}){
    this.#container = container;
    // this.#handleEventChange = onEventChange;
    this.#handlePointChange = onDataChange; //onEventChange
    this.#handleModeChange = onModeChange;
    this.#handleNewEventDestroy = onNewEventDestroy;
  }

  init({point, eventsModel, newEvent = false}) {
    this.#point = point;
    this.#eventsModel = eventsModel;
    this.#types = [...eventsModel.types];
    this.#destinations = [...eventsModel.destinations];
    this.#availableOffers = eventsModel.offers;
    this.#newEvent = newEvent;

    const prevPointComponent = this.#pointComponent; //const prevItemView = this.#itemView;
    const prevPointEditComponent = this.#pointEditComponent; //const prevItemEdit = this.#itemEdit;

    this.#pointEditComponent = this.#newPointEditView();

    this.#pointComponent = new PointView({ //itemView
      point: this.#point,
      types: this.#types,
      destination: this.getCurrentDestination(this.#point.destination),
      availableOffers: this.getCurrentOffers(this.#point.type, this.#point.offers),
      onEditClick: this.#itemEditClickHandler,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    if (this.#newEvent) {
      render(this.#pointComponent, this.#container, RenderPosition.AFTERBEGIN);
    }

    if(prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#container);
      return;
    }

    if(this.#container.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    } else {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy (){
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  getCurrentDestination(destination) {
    return this.#destinations.find((value) => value.id === destination);
  }

  getCurrentOffers(type, offerIds) {
    const offerData = [];

    if (this.#availableOffers && offerIds) {
      this.#offersByType = this.#availableOffers.find((item) => item.type === type);

      if (this.#offersByType.offers) {
        this.#offersByType.offers.forEach((value) => {
          if (offerIds.includes(value.id)) {
            offerData.push(value);
          }
        });
      }
    }

    return offerData;
  }

  resetView() {
    if (this.#editMode) {
      this.#replaceItemEditToView();
    }
    if (this.#newEvent) {
      this.#handleNewEventDestroy();
      this.destroy();
    }
  }

  #replaceItemViewToEdit () {
    replace(this.#pointEditComponent, this.#pointComponent);
    this.#handleModeChange();
    this.#editMode = true;
  }

  #replaceItemEditToView () {
    replace(this.#pointComponent, this.#pointEditComponent);
    this.#editMode = false;
  }

  #newPointEditView() {
    return new EventEditView({
      point: this.#point,
      types: this.#types,
      destinations: this.#destinations,
      availableOffers: this.#availableOffers,
      newEvent: this.#newEvent,
      onSubmitClick: this.#itemSubmitClickHandler,
      onCloseClick: this.#itemCloseClickHandler,
      onDeleteClick:this.#handleDeleteClick
    });
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceItemEditToView();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #itemEditClickHandler = () => {
    this.#replaceItemViewToEdit();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #itemSubmitClickHandler = (evt) => {
    if (this.#newEvent) {
      this.#handlePointChange(
        UserAction.ADD_EVENT,
        UpdateType.MAJOR,
        evt);
      this.#handleNewEventDestroy();
      this.destroy();
      return;
    } else {
      this.#handlePointChange(
        UserAction.UPDATE_EVENT,
        UpdateType.MAJOR,
        evt);
    }
    this.#replaceItemEditToView();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #itemCloseClickHandler = () => {
    this.#replaceItemEditToView();
    remove(this.#pointEditComponent);
    this.#pointEditComponent = this.#newPointEditView();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFavoriteClick = () => {
    this.#handlePointChange(
      UserAction.UPDATE_EVENT,
      UpdateType.MINOR,
      {...this.#point, isFavorite: !this.#point.isFavorite},
    );
  };

  #handleDeleteClick = () => {
    if (this.#newEvent) {
      this.#handleNewEventDestroy();
    } else {
      this.#handlePointChange(
        UserAction.DELETE_EVENT,
        UpdateType.MAJOR,
        this.#point);
      return;
    }
    this.destroy();
  };
}

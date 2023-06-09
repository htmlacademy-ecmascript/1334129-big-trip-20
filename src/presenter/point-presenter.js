import {render, replace, remove} from '../framework/render.js';
import PointView from '../view/point-view.js';
import EventEditView from '../view/event-edit-view.js';

export default class PointPresenter {
  #pointComponent = null;
  #container = null;
  #pointEditComponent = null;
  #handlePointChange = null;
  #handleModeChange = null;
  #editMode = false;
  #offersByType = [];

  #point = null;
  #types = null;
  #destinations = null;
  #availableOffers = null;

  constructor({container, onDataChange, onModeChange}){
    this.#container = container;
    this.#handlePointChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init({point, eventsModel}) {
    this.#point = point;
    this.#types = [...eventsModel.types];
    this.#destinations = [...eventsModel.destinations];
    this.#availableOffers = eventsModel.offers;
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      types: this.#types,
      destination: this.getCurrentDestination(this.#point.destination),
      availableOffers: this.getCurrentOffers(this.#point.type, this.#point.offers),
      onEditClick: this.#itemEditClickHandler,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new EventEditView({
      point: this.#point,
      types: this.#types,
      destinations: this.#destinations,
      availableOffers: this.#availableOffers,
      onSubmitClick: this.#itemSubmitClickHandler,
      onCloseClick: this.#itemCloseClickHandler
    });

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
    // let offerData = [];
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

  #itemSubmitClickHandler = (point) => {
    this.#handlePointChange(point);
    this.#replaceItemEditToView();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #itemCloseClickHandler = () => {
    this.#replaceItemEditToView();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFavoriteClick = () => {
    this.#handlePointChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}

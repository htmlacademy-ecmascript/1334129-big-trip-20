import Observable from '../framework/observable.js';
import {getDestinations} from '../mock/destinations.js';
import {getOffers} from '../mock/offers.js';
import {getRandomEvent} from '../mock/points.js';
import {EVENT_TYPES} from '../const.js';

const EVENT_QUANTITY = 10;

export default class EventsModel extends Observable {
  #points = Array.from({length: EVENT_QUANTITY}, getRandomEvent);
  #types = EVENT_TYPES;
  #destinations = getDestinations();
  #offers = getOffers();

  get points() {
    return this.#points;
  }

  get types() {
    return this.#types;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  updateEvent(updateType, update) {
    const index = this.#points.findIndex((task) => task.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting event');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  }

  addEvent(updateType, update) {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  }

  deleteEvent(updateType, update) {
    const index = this.#points.findIndex((task) => task.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting event');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  }
}

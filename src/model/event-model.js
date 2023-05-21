import {getDestinations} from '../mock/destinations.js';
import {getOffers} from '../mock/offers.js';
import {getRandomEvent} from '../mock/points.js';
import {EVENT_TYPES} from '../const.js';

const EVENT_QUANTITY = 10;

export default class EventsModel {
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
}

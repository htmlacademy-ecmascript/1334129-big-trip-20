import {generateDestination} from '../mock/destination.js';
import {generateOffer} from '../mock/offer.js';
import {generatePoint} from '../mock/point.js';
import {POINT_COUNT, POINT_TYPES} from '../const.js';


export default class MockService {
  destinations = generateDestination();
  offers = generateOffer();
  points = Array.from({length: POINT_COUNT}, generatePoint);
  types = POINT_TYPES;

  getPoints() {
    return this.points;
  }

  getTypes() {
    return this.types;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}

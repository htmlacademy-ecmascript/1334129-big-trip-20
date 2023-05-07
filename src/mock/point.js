import {getRandomInteger} from '../utils.js';
import {Price} from '../const.js';
import { getDate } from './mock-utils.js';


function generatePoint (type, destantionId, offerIds) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(Price.MIN, Price.MAX),
    dateFrom: getDate({next: false}),
    destination: destantionId,
    isFavorite: !!getRandomInteger(0, 1),
    offers: offerIds,
    type
  };
}

export {generatePoint};

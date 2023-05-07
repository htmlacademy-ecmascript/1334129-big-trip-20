import {getRandomInteger} from '../utils.js';
import {Price} from '../const.js';

function generateOffer (type) {
  return {
    id: crypto.randomUUID(),
    name: `Offer ${type}`,
    price: getRandomInteger(Price.MIN, (Price.MAX / 10))
  };
}

export {generateOffer};

import {getRandomArrayElement, getRandomInteger} from '../utils.js';
import {CITIES, DESCRIPTION} from '../const.js';


const getDestinationData = () => {
  const city = getRandomArrayElement(CITIES);
  const descr = getRandomArrayElement(DESCRIPTION);

  return {
    id: crypto.randomUUID(),
    name: city,
    description: descr,
    picture: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${city} ${descr}`
      }
    ]
  };
};

export {getDestinationData};

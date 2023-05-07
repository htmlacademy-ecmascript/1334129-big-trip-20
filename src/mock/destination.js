import {getRandomArrayElement} from '../utils.js';
import {CITIES, DESCRIPTION} from '../const.js';


const generateDestination = () => {
  const city = getRandomArrayElement(CITIES);

  return {
    id: crypto.randomUUID(),
    name: city,
    description: DESCRIPTION,
    picture: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${city} description`
      }
    ]
  };
};

export {generateDestination};

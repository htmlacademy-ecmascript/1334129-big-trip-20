import {getRandomArrayElement, getRandomInteger} from '../utils.js';
import {EVENT_TYPES} from '../const.js';

const MIN_PHOTO_INDEX = 1;
const MAX_PHOTO_INDEX = 200;
const PHOTO_URL = 'https://loremflickr.com/248/152?random=';

const getDestinationData = (id, title, description) => ({
  id: id,
  title: title,
  description: description,
  photos: [
    {
      src: `${PHOTO_URL}${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
      description: 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam'
    },
    {
      src: `${PHOTO_URL}${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
      description: 'Eu luctus nunc ante ut dui'
    },
    {
      src: `${PHOTO_URL}${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
      description: 'Sed sed nisi sed augue convallis suscipit in sed felis'
    },
    {
      src: `${PHOTO_URL}${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
      description: 'Aliquam erat volutpat'
    }
  ]
});

const getDestinations = () => [
  getDestinationData(0, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
  getDestinationData(1,'Amsterdam', 'Cras aliquet varius magna, non porta ligula feugiat eget.'),
  getDestinationData(2,'Geneva', 'Fusce tristique felis at fermentum pharetra.'),
  getDestinationData(3,'Moscow', 'Aliquam id orci ut lectus varius viverra.')
];

export {getDestinationData, getDestinations};

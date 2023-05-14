import {getRandomInteger} from '../utils.js';

const MIN_PHOTO_INDEX = 1;
const MAX_PHOTO_INDEX = 200;
const PHOTO_URL = 'https://loremflickr.com/248/152?random=';
const DESCRIPTIONS_PIC = [
  'Lacinia luctus pulvi',
  'Leo, sed tortor, in ex. Efficitur v',
  'Velit morbi amet,',
  'Velit morbi amet,',
  'Imperdiet tempus '
];

const getPhoto = () => ({
    src: `${PHOTO_URL}${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
    description: `${DESCRIPTIONS_PIC}`
});

const getPhotosArray = () => Array.from({length:getRandomInteger(0, 4)}, getPhoto);


const getDestinationData = (id, title, description) => ({
  id: id,
  title: title,
  description: description,
  photos: getPhotosArray()
});

const getDestinations = () => [
  getDestinationData(0, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
  getDestinationData(1,'Amsterdam', 'Cras aliquet varius magna, non porta ligula feugiat eget.'),
  getDestinationData(2,'Geneva', 'Fusce tristique felis at fermentum pharetra.'),
  getDestinationData(3,'Moscow', 'Aliquam id orci ut lectus varius viverra.')
];

export {getDestinationData, getDestinations};

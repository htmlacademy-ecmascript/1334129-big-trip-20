import {getRandomArrayElement, getRandomInteger} from '../utils.js';
import {CITIES, DESCRIPTION, POINT_TYPES} from '../const.js';

// const MIN_PHOTO_INDEX = 1;
// const MAX_PHOTO_INDEX = 200;

// const mockTasks = [
//   {
//     type: 'taxi',
//     destination: 0,
//     offers: [1, 2],
//     startDate: new Date('2023-01-01T13:25:00'),
//     endDate: new Date('2023-01-01T20:10:00'),
//     price: 100,
//     isFavorite: true
//   },
//   {
//     type: 'drive',
//     destination: 1,
//     offers: [0],
//     startDate: new Date('2023-03-02T15:00:00'),
//     endDate: new Date('2023-03-02T16:15:00'),
//     price: 25,
//     isFavorite: true
//   },
//   {
//     type: 'flight',
//     destination: 2,
//     offers: [2, 3],
//     startDate: new Date('2023-03-02T15:20:00'),
//     endDate: new Date('2023-03-02T17:15:00'),
//     price: 750,
//     isFavorite: false
//   },
//   {
//     type: 'restaurant',
//     destination: 3,
//     offers: [0, 1],
//     startDate: new Date('2023-04-06T10:00:00'),
//     endDate: new Date('2023-04-06T12:15:00'),
//     price: 250,
//     isFavorite: true
//   },
//   {
//     type: 'restaurant',
//     destination: 2,
//     offers: [1],
//     startDate: new Date('2023-03-06T16:00:00'),
//     endDate: new Date('2023-03-06T16:55:00'),
//     price: 250,
//     isFavorite: false
//   }
// ];

// const getRandomEvent = () => getRandomArrayElement(mockEvents);
const getDestinationData = () => {
  const city = getRandomArrayElement()
};
// const getDestinationData = (id, title, description) => ({
//   id: id,
//   title: title,
//   description: description,
//   photos: [
//     {
//       src: `https://loremflickr.com/248/152?random=${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
//       description: 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam'
//     },
//     {
//       src: `https://loremflickr.com/248/152?random=${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
//       description: 'Eu luctus nunc ante ut dui'
//     },
//     {
//       src: `https://loremflickr.com/248/152?random=${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
//       description: 'Sed sed nisi sed augue convallis suscipit in sed felis'
//     },
//     {
//       src: `https://loremflickr.com/248/152?random=${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
//       description: 'Aliquam erat volutpat'
//     }
//   ]
// });

// const getDestination = () => [
//   getDestinationData(0, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
//   getDestinationData(1,'Amsterdam', 'Cras aliquet varius magna, non porta ligula feugiat eget.'),
//   getDestinationData(2,'Geneva', 'Fusce tristique felis at fermentum pharetra.'),
//   getDestinationData(3,'Moscow', 'Aliquam id orci ut lectus varius viverra.')
// ];

// const getOfferData = (id, name, description, price) => ({
//   id: id,
//   name: name,
//   description: description,
//   price: price
// });

// const getOffers = () => {
//   const map = new Map();
//   map.set('taxi', [
//     getOfferData(0, 'uber', 'Order Uber', 20),
//     getOfferData(1, 'yandex', 'Order Yandex', 25),
//     getOfferData(2, 'car', 'Rent a car', 200)
//   ]);
//   map.set('drive', [
//     getOfferData(0, 'own', 'Own car', 10),
//     getOfferData(1, 'truck', 'Rent a truck', 200)
//   ]);
//   map.set('flight', [
//     getOfferData(0, 'luggage', 'Add luggage', 50),
//     getOfferData(1, 'comfort', 'Switch to comfort', 80),
//     getOfferData(2, 'meal', 'Add meal', 15),
//     getOfferData(3, 'seats', 'Choose seats', 5),
//     getOfferData(4, 'train', 'Travel by train', 40)
//   ]);
//   map.set('restaurant', [
//     getOfferData(0, 'chef', 'Meeting the chef', 30),
//     getOfferData(1, 'escort', 'Escort', 500),
//     getOfferData(2, 'reservation', 'Table reservation', 10)
//   ]);
//   return map;
// };

export {getRandomEvent, getDestinations, getOffers};

import {getRandomArrayElement, getRandomInteger} from '../utils.js';
import {EVENT_TYPES} from '../const.js';
import dayjs from 'dayjs';
import {getDestinations} from './destinations.js';

const MIN_EVENT_OFFERS = 0;
const MAX_EVENT_OFFERS = 3;
const MIN_MOCK_ID = 0;
const MIN_PRICE = 10;
const MAX_PRICE = 800;
const MIDDLE_EVENT_PRICE = 400;
const MOCK_DATA_QUANTITY = 4;

const getRandomOfferId = () => getRandomInteger(MIN_EVENT_OFFERS, MAX_EVENT_OFFERS - 1);

const getMockEvent = () => {

  const type = getRandomArrayElement(EVENT_TYPES);
  const offers = Array.from(new Set(Array.from({length: getRandomOfferId()}, getRandomOfferId)));
  const startDate = new Date('2022-04-01T00:00:00');
  const endDate = new Date('2023-04-31T23:59:59');
  const randomDate = new Date(startDate.getTime() + Math.random() * (dayjs(endDate).diff(startDate)));
  const maxMinutesToAdd = 500;

  return{
    type: type,
    destination: getRandomInteger(MIN_MOCK_ID, getDestinations().length - 1),
    offers: offers,
    startDate: randomDate,
    endDate: dayjs(randomDate).add(getRandomInteger(1, maxMinutesToAdd), 'minute'),
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    isFavorite: getRandomInteger(MIN_PRICE, MAX_PRICE) > MIDDLE_EVENT_PRICE
  };
};
const mockEvents = () => Array.from({length: MOCK_DATA_QUANTITY}, getMockEvent);

const getRandomEvent = () => getRandomArrayElement(mockEvents());

export {getRandomEvent};

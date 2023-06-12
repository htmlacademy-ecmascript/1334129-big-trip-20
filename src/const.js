import {nanoid} from 'nanoid';
const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price'
};

const UserAction = {
  UPDATE_EVENT: 'UPDATE_EVENT',
  ADD_EVENT: 'ADD_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
};

const UpdateType = {
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

const EmptyEvent = {
  id: nanoid(),
  type: EVENT_TYPES[0],
  destination: null,
  offers: [],
  startDate: null,
  endDate: null,
  price: 0,
  isFavorite: false
};

export {EVENT_TYPES, FilterType, SortType, UpdateType, UserAction, EmptyEvent};

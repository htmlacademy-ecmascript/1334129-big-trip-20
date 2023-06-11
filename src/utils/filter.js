import {FilterType} from '../const.js';
import {isPointPast, isPointFuture, isPointPresent} from './point.js';

const filter = {
  [FilterType.EVERYTHING]: (events) => [...events],
  [FilterType.FUTURE]: (events) => events.filter((event) => isPointFuture(event)),
  [FilterType.PRESENT]: (events) => events.filter((event) => isPointPresent(event)),
  [FilterType.PAST]: (events) => events.filter((event) => isPointPast(event))
};

export {filter};

import {filter} from '../utils/filter.js';

function generateFilters(events) {
  return Object.entries(filter)
    .map(([filterType, filterPoints]) => ({
      type: filterType,
      hasPoints: filterPoints(events).length > 0
    }));
}

export {generateFilters};

const HOUR_DURATION = 60;

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const getTimeFromMins = (mins) => {
  if (mins < HOUR_DURATION) {
    return `${mins}M`;
  }
  const hours = Math.trunc(mins / HOUR_DURATION);
  const minutes = mins % HOUR_DURATION;
  return `${hours}H ${minutes}M`;
};

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {getRandomArrayElement, getRandomInteger, getTimeFromMins, updateItem};

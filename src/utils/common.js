const HOUR_DURATION = 60;
const DAY_DURATION = 24;

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const getTimeFromMins = (mins) => {
  if (mins < HOUR_DURATION) {
    return `${mins}M`;
  }
  let hours = Math.trunc(mins / HOUR_DURATION);
  const minutes = mins % HOUR_DURATION;
  if (hours < DAY_DURATION) {
    return `${hours}H ${minutes}M`;
  }
  const days = Math.trunc(hours / DAY_DURATION);
  hours = hours % DAY_DURATION;
  return `${days}D ${hours}H ${minutes}M`;
};

const getRandomBoolean = () => Math.random() >= 0.5;


function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {getRandomArrayElement, getRandomInteger, getTimeFromMins, updateItem, getRandomBoolean};

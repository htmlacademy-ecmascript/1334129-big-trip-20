const TIME_IN_MINUTES = 60;

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const getTimeFromMins = (mins) => {
  if (mins < TIME_IN_MINUTES) {
    return `${mins}M`;
  }
  const hours = Math.trunc(mins / TIME_IN_MINUTES);
  const minutes = mins % TIME_IN_MINUTES;
  return `${hours}H ${minutes}M`;
};

export {getRandomArrayElement, getRandomInteger, getTimeFromMins};

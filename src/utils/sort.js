import dayjs from 'dayjs';

const sortByDate = (eventA, eventB) => dayjs(eventA.startDate).diff(dayjs(eventB.startDate));
const sortByTime = (eventA, eventB) => dayjs(eventA.endDate).diff(dayjs(eventA.startDate)) - dayjs(eventB.endDate).diff(dayjs(eventB.startDate));
const sortByPrice = (eventA, eventB) => eventA.price - eventB.price;

export {sortByDate, sortByTime, sortByPrice};

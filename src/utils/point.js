import dayjs from 'dayjs';

function capitalize(string) {
  return `${string[0].toUperCase()}${string.slice(1)}`;
}

function isPointFuture(point) {
  return dayjs().isBefore(point.dateFrom);
}

function isPointPresent(point) {
  return (dayjs().isAfter(point.dateFrom) && dayjs().isBefore(point.dateTo));
}

function isPointPast(point) {
  return dayjs().isAfter(point.dateTo);
}

export {
  capitalize,
  isPointFuture,
  isPointPresent,
  isPointPast
};

import dayjs from 'dayjs';
import {FilterType} from '../const';

const ispointFuture = (point) => dayjs().isBefore(point.startDate);

const ispointPresent = (point) => dayjs().isAfter(point.startDate) && dayjs().isBefore(point.endDate);

const ispointPast = (point) => dayjs().isAfter(point.endDate);

const filter = {
  [FilterType.EVERYTHING]: (points) => [...points],
  [FilterType.FUTURE]: (points) => points.filter((point) => ispointFuture(point)),
  [FilterType.PRESENT]: (points) => points.filter((point) => ispointPresent(point)),
  [FilterType.PAST]: (points) => points.filter((point) => ispointPast(point))
};

export {filter};

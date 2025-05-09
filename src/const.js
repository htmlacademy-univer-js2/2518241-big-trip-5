import {isPointPresent, isPointPast, isPointFuture} from './utils.js';


export const EVENT_TYPES = ['taxi', 'sightseeing', 'check-in', 'flight'];

export const TIME_FORMATS = {TIME: 'HH:mm', DAY: 'MMM D', FULL_DATE: 'D/MM/YY HH:mm', TIME_TAG_VALUE: 'YYYY-MM-DD'};

export const TIME_SUFFIXES = ['H', 'D', 'M'];


export const FILTER_TYPES = {
  EVERYTHING: 'everything',
  FUTUTRE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

export const FILTERS = {
  [FILTER_TYPES.EVERYTHING]: (points) => [...points],
  [FILTER_TYPES.FUTUTRE]: (points) => points.filter((point) => isPointFuture(point)),
  [FILTER_TYPES.PRESENT]: (points) => points.filter((point) => isPointPresent(point)),
  [FILTER_TYPES.PAST]: (points) => points.filter((point) => isPointPast(point))
};

export const MODE = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

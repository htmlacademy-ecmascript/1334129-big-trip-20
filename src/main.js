import EventListPresenter from './presenter/event-list-presenter.js';
import EventInfoPresenter from './presenter/event-info-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

const eventListElement = document.querySelector('.trip-events');
const eventInfoElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');

const eventInfoPresenter = new EventInfoPresenter(
  {container: eventInfoElement}
);

const filterPresenter = new FilterPresenter(
  {container: filterElement}
);

const eventListPresenter = new EventListPresenter(
  {container: eventListElement}
);

eventInfoPresenter.init();
filterPresenter.init();
eventListPresenter.init();

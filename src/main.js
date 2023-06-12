import BoardPresenter from './presenter/board-presenter.js';
import EventInfoPresenter from './presenter/event-info-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import EventsModel from './model/event-model.js';
import FilterModel from './model/filter-model.js';
import NewEventButtonView from './view/new-event-button-view.js';
import {render} from './framework/render.js';

const eventListElement = document.querySelector('.trip-events');
const eventInfoElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');

const eventInfoPresenter = new EventInfoPresenter(
  {container: eventInfoElement}
);

const eventsModel = new EventsModel();
const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter({
  container: filterElement,
  filterModel,
  eventsModel
});

const eventListPresenter = new BoardPresenter({
  container: eventListElement,
  filterModel,
  eventsModel,
  onNewEventDestroy: handleNewEventFormClose
});

const newEventButtonComponent = new NewEventButtonView({
  onClick: handleNewEventButtonClick
});

function handleNewEventFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick() {
  eventListPresenter.createEvent();
  newEventButtonComponent.element.disabled = true;
}

render(newEventButtonComponent, eventInfoElement);

eventInfoPresenter.init();
filterPresenter.init();
eventListPresenter.init();

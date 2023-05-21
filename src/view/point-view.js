import AbstractView from '../framework/view/abstract-view.js';
import {getTimeFromMins} from '../utils/common.js';
import dayjs from 'dayjs';

const MAIN_DATE_FORMAT = 'MMM DD';
const MAIN_DATETIME_FORMAT = 'YYYY-MM-DD';
const TIME_FORMAT = 'HH:mm';
const SCHEDULE_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm';

const createOffersTemplate = (offers, availableOffers) => {
  let templateContent = '';
  for (const offer of offers) {
    const offerData = availableOffers.find((value) => value.id === offer);
    templateContent +=
    `<li class="event__offer">
      <span class="event__offer-title">${offerData.description}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offerData.price}</span>
    </li>`;
  }
  return templateContent ?
    `<ul class="event__selected-offers">
    ${templateContent}
    </ul>` :
    templateContent;
};

const createItemTemlpate = (point, destinations, availableOffers) => {
  const {type, destination, offers, startDate, endDate, price, isFavorite} = point;
  const destinationData = destinations.find((value) => value.id === destination);
  const title = `${type} ${destinationData.title}`;

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime=${dayjs(startDate).format(MAIN_DATETIME_FORMAT)}">${dayjs(startDate).format(MAIN_DATE_FORMAT)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${title}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dayjs(startDate).format(SCHEDULE_DATETIME_FORMAT)}">${dayjs(startDate).format(TIME_FORMAT)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dayjs(endDate).format(SCHEDULE_DATETIME_FORMAT)}">${dayjs(endDate).format(TIME_FORMAT)}</time>
        </p>
        <p class="event__duration">${getTimeFromMins(dayjs(endDate).diff(startDate, 'm'))}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${createOffersTemplate(offers, availableOffers.get(type))}
      <button class="event__favorite-btn  ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class PointView extends AbstractView {
  #point = null;
  #destinations = null;
  #availableOffers = null;
  #onEditClick = null;

  constructor({point, destinations, availableOffers, onEditClick}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#availableOffers = availableOffers;
    this.#onEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#EditClickHandler);
  }

  get template() {
    return createItemTemlpate(
      this.#point,
      this.#destinations,
      this.#availableOffers);
  }

  #EditClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEditClick();
  };
}

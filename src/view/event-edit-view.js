import AbstractView from '../framework/view/abstract-view.js';
import dayjs from 'dayjs';

const DATE_FORMAT = 'DD/MM/YY HH:mm';

const createEventTypesTemplate = (types, selectedType) => {
  let templateContent = '';
  for (const type of types) {
    templateContent +=
    `<div class="event__type-item">
      <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}"
      ${selectedType === type ? 'checked' : ''}>
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${type}</label>
    </div>`;
  }
  return templateContent;
};

// const createDestinationsTemplate = (destinations) => {
//   let templateContent = '';
//   for (const destination of destinations) {
//     templateContent += `<option value="${destination.title}"></option>`;
//   }
//   return templateContent;
// };

const createDestinationsTemplate = (destinations) => {
  let templateContent = '';
  // console.log(destinations);
  // for (const destination of destinations) {
  //   templateContent += `<option value="${destination.title}"></option>`;
  // }

  return templateContent;
};

const createOffersTemplate = (offerData, offers) => {
  let templateContent = '';
  if (offerData.length === 0) {
    return templateContent;
  }
  templateContent += `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">`;

  for (const offer of offerData) {
    const checked = offers.includes(offer.id) ? 'checked' : '';
    templateContent += `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title}-1" type="checkbox" name="event-offer-${offer.title}" ${checked}>
      <label class="event__offer-label" for="event-offer-${offer.title}-1">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`;
  }
  templateContent += '</div></section>';
  return templateContent;
};

const createPhotoTemplate = (photos) => { //должно работать
  let templateContent = '';
  if (photos.length === 0) {
    return templateContent;
  }
  templateContent += '<div><div class="event__photos-tape">';

  for (const photo of photos) {
    templateContent += `<img class="event__photo" src="${photo.src}" alt="${photo.description}"></img>`;
  }
  templateContent += '</div></div>';
  return templateContent;
};

const createEventEditTemlpate = (point, types, endpoint, offerData) => {
  // console.log(endpoint);
  // console.log(offerData);
  // console.log(point);
  // console.log(types);
  // console.log(endpoint.photos);
  const {type, offers, startDate, endDate, price} = point;
  // const destinationData = destinations.find((value) => value.id === destination);

  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${createEventTypesTemplate(types, type)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${endpoint.title}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${createDestinationsTemplate(endpoint)}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(startDate).format(DATE_FORMAT)}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(endDate).format(DATE_FORMAT)}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        ${createOffersTemplate(offerData, offers)}
        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${endpoint.description}</p>
          ${createPhotoTemplate(endpoint.photos)}
        </section>
      </section>
    </form>
  </li>`;
};

// const createEventEditTemlpate = (point, types, destinations, availableOffers) => {
//   const {type, destination, offers, startDate, endDate, price} = point;
//   const destinationData = destinations.find((value) => value.id === destination);

//   return `<li class="trip-events__item">
//     <form class="event event--edit" action="#" method="post">
//       <header class="event__header">
//         <div class="event__type-wrapper">
//           <label class="event__type  event__type-btn" for="event-type-toggle-1">
//             <span class="visually-hidden">Choose event type</span>
//             <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
//           </label>
//           <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

//           <div class="event__type-list">
//             <fieldset class="event__type-group">
//               <legend class="visually-hidden">Event type</legend>
//               ${createEventTypesTemplate(types, type)}
//             </fieldset>
//           </div>
//         </div>

//         <div class="event__field-group  event__field-group--destination">
//           <label class="event__label  event__type-output" for="event-destination-1">
//             ${type}
//           </label>
//           <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationData.title}" list="destination-list-1">
//           <datalist id="destination-list-1">
//             ${createDestinationsTemplate(destinations)}
//           </datalist>
//         </div>

//         <div class="event__field-group  event__field-group--time">
//           <label class="visually-hidden" for="event-start-time-1">From</label>
//           <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(startDate).format(DATE_FORMAT)}">
//           &mdash;
//           <label class="visually-hidden" for="event-end-time-1">To</label>
//           <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(endDate).format(DATE_FORMAT)}">
//         </div>

//         <div class="event__field-group  event__field-group--price">
//           <label class="event__label" for="event-price-1">
//             <span class="visually-hidden">Price</span>
//             &euro;
//           </label>
//           <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
//         </div>

//         <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
//         <button class="event__reset-btn" type="reset">Delete</button>
//         <button class="event__rollup-btn" type="button">
//           <span class="visually-hidden">Open event</span>
//         </button>
//       </header>
//       <section class="event__details">
//         ${createOffersTemplate(availableOffers.get(type), offers)}
//         <section class="event__section  event__section--destination">
//           <h3 class="event__section-title  event__section-title--destination">Destination</h3>
//           <p class="event__destination-description">${destinations[destination].description}</p>
//           ${createPhotoTemplate(destinations[destination].photos)}
//         </section>
//       </section>
//     </form>
//   </li>`;
// };

export default class EventEditView extends AbstractView {
  #point = null;
  #types = null;
  #destination = null;
  #availableOffers = null;
  #onSubmitClick = null;
  #onCloseClick = null;

  constructor({point, types, destination, availableOffers, onSubmitClick, onCloseClick}) {
    super();
    this.#point = point;
    this.#types = types;
    this.#destination = destination;
    this.#availableOffers = availableOffers;
    this.#onSubmitClick = onSubmitClick;
    this.#onCloseClick = onCloseClick;
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#submitClickHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeClickHandler);
  }

  get template() {
    return createEventEditTemlpate(
      this.#point,
      this.#types,
      this.#destination,
      this.#availableOffers);
  }

  #submitClickHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitClick(this.#point);
  };

  #closeClickHandler = (evt) => {
    evt.preventDefault();
    this.#onCloseClick();
  };
}

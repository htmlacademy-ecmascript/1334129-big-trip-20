const getOfferData = (id, name, description, price) => ({
  id: id,
  name: name,
  description: description,
  price: price
});

const getOffers = () => {
  const map = new Map();
  map.set('taxi', [
    getOfferData(0, 'uber', 'Order Uber', 20),
    getOfferData(1, 'yandex', 'Order Yandex', 25),
    getOfferData(2, 'car', 'Rent a car', 200)
  ]);
  map.set('bus', [
    getOfferData(0, 'night', 'Night ride', 20),
    getOfferData(1, 'blanket', 'Extra blanket', 30),
    getOfferData(2, 'drinks', 'Add drinks', 100)
  ]);
  map.set('train', [
    getOfferData(0, 'coupe', 'Сoupe train', 200),
    getOfferData(1, 'meal', 'Add meal', 15),
    getOfferData(2, 'luggage', 'Add luggage', 50)
  ]);
  map.set('ship', [
    getOfferData(0, 'ferryboat', 'Ferryboat', 900),
    getOfferData(1, 'transportation', 'Сar transportation', 150),
    getOfferData(2, 'extra', 'Extra luggage', 50)
  ]);
  map.set('drive', [
    getOfferData(0, 'own', 'Own car', 10),
    getOfferData(1, 'truck', 'Rent a truck', 200),
    getOfferData(2, 'fridge', 'Car fridge', 15)
  ]);
  map.set('check-in', [
    getOfferData(0, 'ferryboat', 'Room reserve', 120),
    getOfferData(1, 'bed', 'Extra bed', 150),
    getOfferData(2, 'lunch', 'Lunch', 50)
  ]);
  map.set('flight', [
    getOfferData(0, 'luggage', 'Add luggage', 50),
    getOfferData(1, 'comfort', 'Switch to comfort', 80),
    getOfferData(2, 'meal', 'Add meal', 15),
    getOfferData(3, 'seats', 'Choose seats', 5),
    getOfferData(4, 'train', 'Travel by train', 40)
  ]);
  map.set('sightseeing', [
    getOfferData(0, 'delivery', 'Bus delivery', 120),
    getOfferData(1, 'photograph', 'Photograph', 150),
    getOfferData(2, 'video', 'Copter video', 50)
  ]);
  map.set('restaurant', [
    getOfferData(0, 'chef', 'Meeting the chef', 30),
    getOfferData(1, 'escort', 'Escort', 500),
    getOfferData(2, 'reservation', 'Table reservation', 10)
  ]);
  return map;
};

export {getOfferData, getOffers};

const getOfferData = (id, name, description, price) => ({
  id: id,
  name: name,
  description: description,
  price: price
});

const getOffers = () => {
  // const map = new Map();
  // map.set('taxi', [
  //   getOfferData(0, 'uber', 'Order Uber', 20),
  //   getOfferData(1, 'yandex', 'Order Yandex', 25),
  //   getOfferData(2, 'car', 'Rent a car', 200)
  // ]);
  // map.set('bus', [
  //   getOfferData(0, 'night', 'Night ride', 20),
  //   getOfferData(1, 'blanket', 'Extra blanket', 30),
  //   getOfferData(2, 'drinks', 'Add drinks', 100)
  // ]);
  // map.set('train', [
  //   getOfferData(0, 'coupe', 'Сoupe train', 200),
  //   getOfferData(1, 'meal', 'Add meal', 15),
  //   getOfferData(2, 'luggage', 'Add luggage', 50)
  // ]);
  // map.set('ship', [
  //   getOfferData(0, 'ferryboat', 'Ferryboat', 900),
  //   getOfferData(1, 'transportation', 'Сar transportation', 150),
  //   getOfferData(2, 'extra', 'Extra luggage', 50)
  // ]);
  // map.set('drive', [
  //   getOfferData(0, 'own', 'Own car', 10),
  //   getOfferData(1, 'truck', 'Rent a truck', 200),
  //   getOfferData(2, 'fridge', 'Car fridge', 15)
  // ]);
  // map.set('check-in', [
  //   getOfferData(0, 'ferryboat', 'Room reserve', 120),
  //   getOfferData(1, 'bed', 'Extra bed', 150),
  //   getOfferData(2, 'lunch', 'Lunch', 50)
  // ]);
  // map.set('flight', [
  //   getOfferData(0, 'luggage', 'Add luggage', 50),
  //   getOfferData(1, 'comfort', 'Switch to comfort', 80),
  //   getOfferData(2, 'meal', 'Add meal', 15),
  //   getOfferData(3, 'seats', 'Choose seats', 5),
  //   getOfferData(4, 'train', 'Travel by train', 40)
  // ]);
  // map.set('sightseeing', [
  //   getOfferData(0, 'delivery', 'Bus delivery', 120),
  //   getOfferData(1, 'photograph', 'Photograph', 150),
  //   getOfferData(2, 'video', 'Copter video', 50)
  // ]);
  // map.set('restaurant', [
  //   getOfferData(0, 'chef', 'Meeting the chef', 30),
  //   getOfferData(1, 'escort', 'Escort', 500),
  //   getOfferData(2, 'reservation', 'Table reservation', 10)
  // ]);
  return [{
    "type": "taxi",
    "offers": [{
      "id": 1,
      "title": "Upgrade to a business class",
      "price": 190
    }, {
      "id": 2,
      "title": "Choose the radio station",
      "price": 30
    }, {
      "id": 3,
      "title": "Choose temperature",
      "price": 170
    }, {
      "id": 4,
      "title": "Drive quickly, I'm in a hurry",
      "price": 100
    }, {
      "id": 5,
      "title": "Drive slowly",
      "price": 110
    }]
  }, {
    "type": "bus",
    "offers": [{
      "id": 1,
      "title": "Infotainment system",
      "price": 50
    }, {
      "id": 2,
      "title": "Order meal",
      "price": 100
    }, {
      "id": 3,
      "title": "Choose seats",
      "price": 190
    }]
  }, {
    "type": "train",
    "offers": [{
      "id": 1,
      "title": "Book a taxi at the arrival point",
      "price": 110
    }, {
      "id": 2,
      "title": "Order a breakfast",
      "price": 80
    }, {
      "id": 3,
      "title": "Wake up at a certain time",
      "price": 140
    }]
  }, {
    "type": "flight",
    "offers": [{
      "id": 1,
      "title": "Choose meal",
      "price": 120
    }, {
      "id": 2,
      "title": "Choose seats",
      "price": 90
    }, {
      "id": 3,
      "title": "Upgrade to comfort class",
      "price": 120
    }, {
      "id": 4,
      "title": "Upgrade to business class",
      "price": 120
    }, {
      "id": 5,
      "title": "Add luggage",
      "price": 170
    }, {
      "id": 6,
      "title": "Business lounge",
      "price": 160
    }]
  }, {
    "type": "check-in",
    "offers": [{
      "id": 1,
      "title": "Choose the time of check-in",
      "price": 70
    }, {
      "id": 2,
      "title": "Choose the time of check-out",
      "price": 190
    }, {
      "id": 3,
      "title": "Add breakfast",
      "price": 110
    }, {
      "id": 4,
      "title": "Laundry",
      "price": 140
    }, {
      "id": 5,
      "title": "Order a meal from the restaurant",
      "price": 30
    }]
  }, {
    "type": "sightseeing",
    "offers": []
  }, {
    "type": "ship",
    "offers": [{
      "id": 1,
      "title": "Choose meal",
      "price": 130
    }, {
      "id": 2,
      "title": "Choose seats",
      "price": 160
    }, {
      "id": 3,
      "title": "Upgrade to comfort class",
      "price": 170
    }, {
      "id": 4,
      "title": "Upgrade to business class",
      "price": 150
    }, {
      "id": 5,
      "title": "Add luggage",
      "price": 100
    }, {
      "id": 6,
      "title": "Business lounge",
      "price": 40
    }]
  }, {
    "type": "drive",
    "offers": [{
      "id": 1,
      "title": "With automatic transmission",
      "price": 110
    }, {
      "id": 2,
      "title": "With air conditioning",
      "price": 180
    }]
  }, {
    "type": "restaurant",
    "offers": [{
      "id": 1,
      "title": "Choose live music",
      "price": 150
    }, {
      "id": 2,
      "title": "Choose VIP area",
      "price": 70
    }]
  }]

};

export {getOfferData, getOffers};

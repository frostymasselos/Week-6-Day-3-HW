const Traveller = function(journeys) {
  this.journeys = journeys;
};


Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) { return this.journeys.filter((journey) =>{
  return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance){
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const travelModes = this.journeys.map((journey) => {
//     return journey.transport
//   });
//   // ['train', 'train', 'bike', 'car']
//   travelModes.filter((transport, index, array) => {
//     .indexOf(transport)
//   })
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  const travelModes = this.journeys.map((journey) => {
    return journey.transport
  });
  // ['train', 'train', 'bike', 'car']
  return travelModes.filter((transport, index, array) => {
    array.indexOf(transport) === index
  })
  // ['train', etc...] gets returned into test
};



module.exports = Traveller;

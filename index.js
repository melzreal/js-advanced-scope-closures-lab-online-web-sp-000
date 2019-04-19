function retailPriceMaker(produceDrivingRange) {
  return function(marketMultiplier) {
    return marketMultiplier - produceDrivingRange;
  };
}


function produceTipCalculator(percent) {
  return function(tip) {
    return tip * percent;
  };
}

function createDriver(){
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
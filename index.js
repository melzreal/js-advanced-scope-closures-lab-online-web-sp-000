function produceDrivingRange(blocks) {
  return function(blockRange) {
    return blocks - blockRange;
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

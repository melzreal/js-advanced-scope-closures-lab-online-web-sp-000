function produceDrivingRange(block1, block2) {
  return function(blockRange) {

    let totals = block1 + 8 - block2;
    if (totals >= 0) {
        return `Within range by ${totals}`;
    } else {
        return `Out of range by ${totals}`;
    }
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

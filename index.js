function produceDrivingRange(blockRange) {
  return function(start, end) {

    let blocksDesired = Math.abs(parseInt(start) - parseInt(end));
    let blocksTotal = blockRange - blocksDesired;

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

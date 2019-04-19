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

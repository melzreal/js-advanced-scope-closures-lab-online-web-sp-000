function retailPriceMaker(produceDrivingRange) {
  return function(marketMultiplier) {
    return marketMultiplier - produceDrivingRange;
  };
}

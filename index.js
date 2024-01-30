function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    if (pickupLocation >= hqLocation) {
      return pickupLocation - hqLocation;
    } else {
      return hqLocation - pickupLocation;
    }
  }
  function distanceFromHqInFeet(pickupLocation) {
    const blockLengthInFeet = 264; 
    const hqLocation = 42;
    let distanceInBlocks;
  
    if (pickupLocation >= hqLocation) {
      distanceInBlocks = pickupLocation - hqLocation;
    } else {
      distanceInBlocks = hqLocation - pickupLocation;
    }
  
    return distanceInBlocks * blockLengthInFeet; // Distance in feet
  }
  function distanceTravelledInFeet(start, destination) {
    const blockLengthInFeet = 264;

    let distance;
   if (destination >= start) {
      distance = (destination - start) * blockLengthInFeet;
    } else {
      distance = (start - destination) * blockLengthInFeet;
    }
  
    return distance;
  }
  function calculatesFarePrice(start, destination) {
  const blockLengthInFeet = 264; 
  const freeDistance = 400; 
  const baseFareDistance = 2000; 
  const flatFareDistance = 2500; 
  const farePerFootAfterBase = 0.02; 

  let distanceInFeet;
  if (destination >= start) {
    distanceInFeet = (destination - start) * blockLengthInFeet;
  } else {
    distanceInFeet = (start - destination) * blockLengthInFeet;
  }

  if (distanceInFeet <= freeDistance) {
    return 0; 
  } else if (distanceInFeet <= baseFareDistance) {
    return (distanceInFeet - freeDistance) * farePerFootAfterBase; 
  } else if (distanceInFeet < flatFareDistance) {
    return 25; 
  } else {
    return 'cannot travel that far'; 
  }
}
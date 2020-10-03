
exports.min = function min (array) {
  let minValue = 0;
  if (array) {
  	for(let i = 0; i < array.length; i++) {
	    let currentValue = array[i];
	    if(currentValue < minValue) {
	        minValue = currentValue;
	    }
	  }
	  return minValue;
  } else {
  	return 0;
  }
}

exports.max = function max (array) {
  let maxValue = 0;
  if (array) {
  	for(let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if(currentValue > maxValue) {
        maxValue = currentValue;
    }
  }
  return maxValue;
  } else {
  	return 0;
  }
}

exports.avg = function avg (array) {
		if ((array == 0) || (array == undefined)) {
			return 0;
	  } else {
			let sum = 0;
		  for(let i = 0; i < array.length; i++) {
		    let currentValue = array[i];
		    sum += currentValue;
		  }
		  return sum/array.length;
	  }
}

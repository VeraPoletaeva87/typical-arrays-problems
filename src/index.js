
exports.min = function min (array) {
    if (!array || array.length ===0) {
        return 0;
    }
    let min = 0;
    for (let i=0; i< array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
  return min;
}

exports.max = function max (array) {
    if (!array || array.length ===0) {
        return 0;
    }
    let max = 0;
    for (let i=0; i< array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
  return max;
}

exports.avg = function avg (array) {
    if (!array || array.length ===0) {
        return 0;
    }
    let sum = 0;
    for (let i=0; i< array.length; i++) {
            sum = sum + array[i];
    }
  return sum/array.length;
}

function sumItems(array) {
  // Sum all the numbers in the array
  const flat = array.flat(Infinity);
  let sum = 0;
  for (let i = 0; i < flat.length; i++) {
    sum = sum + flat[i];
  }
  return sum;
}

module.exports = sumItems;

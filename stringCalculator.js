function add(numbers) {
  if (numbers === '') {
    return 0;
  }

  // Split the string by commas and add the numbers
  const numArray = numbers.split(/[\n,]+/);
  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };

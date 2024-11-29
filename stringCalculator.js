function add(numbers) {
  if (numbers === '') {
    return 0;
  }

  // Check if there is a custom delimiter
  if (numbers.startsWith('//')) {
    const delimiterLine = numbers.split('\n')[0];
    const delimiter = delimiterLine.charAt(2); // the delimiter is after `//`

    // Extract the numbers and split by the custom delimiter
    const numArray = numbers.slice(delimiterLine.length + 1).split(delimiter);
    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }

  // Split the string by commas and add the numbers
  const numArray = numbers.split(/[\n,]+/);

  // Check for negative numbers
  const negatives = numArray.filter(num => parseInt(num, 10) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
  }

  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };

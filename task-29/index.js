function getEvenNumbers(start, end) {
  // Change code below this line

  const evenNumbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers;

  // Change code above this line
}

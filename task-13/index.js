function changeEven(numbers, value) {
  // Change code below this line
  const newNumbers = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newNumbers.push(number + value);
    } else {
      newNumbers.push(number);
    }
  });

  return newNumbers;
  // Change code above this line
}

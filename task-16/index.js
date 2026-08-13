function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

  const combinedArray = firstArray.concat(secondArray);
  return combinedArray.slice(0, maxLength);

  // Change code above this line
}

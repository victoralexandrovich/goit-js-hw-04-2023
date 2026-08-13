function getCommonElements(array1, array2) {
  // Change code below this line

  const newArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }

  return newArray;

  // Change code above this line
}

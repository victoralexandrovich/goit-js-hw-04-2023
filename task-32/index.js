function includes(array, value) {
  // Change code below this line

  for (const element of array) {
    if (element === value) {
      return true;
    }
  }

  return false;

  // Change code above this line
}

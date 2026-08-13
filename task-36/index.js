function checkForSpam(message) {
  let result;
  // Change code below this line

  const normalizedMessage = message.toLowerCase();
  result =
    normalizedMessage.includes("spam") || normalizedMessage.includes("sale");

  // Change code above this line
  return result;
}

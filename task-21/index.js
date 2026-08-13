function findLongestWord(string) {
  // Change code below this line

  const words = string.split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i += 1) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;

  // Change code above this line
}

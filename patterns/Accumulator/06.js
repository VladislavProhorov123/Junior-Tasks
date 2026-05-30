// Longest Word

// Напишите функцию, которая принимает строку текста и возвращает самое длинное слово в этой строке

function longestWord(str) {
  const words = str.split(" ")

  let longest = words[0]

  for(const word of words) {
    if(word.length > longest.length) {
      longest = word
    }
  }

  return longest
}

console.log(longestWord("I like JavaScript")) // JavaScript

// Shortest Word

// Напишите функцию, которая принимает строку текста и возвращает самое короткое слово в этой строке.

function shortestWord(arr) {
  let minWord =  arr[0]

  for(const word of arr) {
    if(minWord.length > word.length) {
      minWord = word
    }
  }

  return minWord
}

console.log(shortestWord(["cat", "elephant", "tiger"]))

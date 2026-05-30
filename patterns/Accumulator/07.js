// Most "A"s Word

// Напишите функцию, которая принимает массив слов и возвращает слово, в котором чаще всего встречается буква "а"

function mostAWord(arr) {
  let bestWord = arr[0]
  let bestScore = 0

  for(const word of arr) {
    let currentScore = 0

    for(const char of word) {
      if(char === 'a') {
        currentScore++
      }
    }

    if(currentScore > bestScore) {
      bestScore = currentScore
      bestWord = word
    }
  }

  return bestWord
}

console.log(mostAWord(["apple", "banana", "kiwi", "strawberry"])) // banana

// Word with Most Vowels

// Напишите функцию, которая принимает массив слов и возвращает слово, в котором содержится наибольшее количество гласных букв. 

function wordWithMostVowels(arr) {
  let bestWord = arr[0]
  let bestScore = 0
  const vowels = "aeiou"

  for(const word of arr) {
    let currentScore = 0

    for(const char of word) {
      if(vowels.includes(char)) {
        currentScore++
      }
    }

    if(currentScore > bestScore) {
      bestScore = currentScore
      bestWord = word
    }
  }

  return bestWord
}

console.log(wordWithMostVowels(["apple", "banana", "kiwi", "strawberry"])) // banana
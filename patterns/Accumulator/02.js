// Count Vowels 

// Напишите функцию, которая принимает на вход строку и возвращает количество гласных букв в ней. (a, e, i, o, u)

function countVowels(str) {
  let count = 0
  const vowels = "aeiou"

  for(const char of str) {
    if(vowels.includes(char)) {
      count++
    }
  }

  return count
}

console.log(countVowels("JavaScript and TypeScript!")) // 6
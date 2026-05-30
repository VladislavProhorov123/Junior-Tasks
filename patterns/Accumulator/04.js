// Count Positive Numbers

// Напишите функцию, которая принимает массив чисел и возвращает количество положительных чисел в этом массивe.

function countPositiveNumbers(arr) {
  let count = 0

  for(const num of arr) {
    if(num > 0) {
      count++
    }
  }

  return count
}

console.log(countPositiveNumbers([5, -2, 10, -1, 7]))
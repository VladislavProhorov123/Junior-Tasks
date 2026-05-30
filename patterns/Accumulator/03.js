// Count Even Numbers

// Напишите функцию, которая принимает массив чисел и возвращает количество четных чисел в этом массиве

function countEvenNumbers(arr) {
  let count = 0

  for(const num of arr) {
    if(num % 2 === 0) {
      count++
    }
  }

  return count
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])) // 4
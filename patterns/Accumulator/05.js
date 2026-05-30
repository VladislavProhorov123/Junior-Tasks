// Max number in Array

// Напишите функцию, которая принимает массив чисел и возвращает самое большое (максимальное) число из этого массива

function maxNumber(arr) {
  let max = 0

  for(const num of arr) {
    if(num > max) {
      max = num
    }
  }

  return max
}

console.log(maxNumber([12, 5, 27, 3, 19])) // 27

// Min number in Array

// Напишите функцию, которая принимает массив чисел и возвращает самое маленькое (минимальное) число из этого массива.

function minNumber(arr) {
  let min = arr[0]

  for(const num of arr) {
    if(num < min) {
      min = num
    }
  }

  return min
}

console.log(minNumber([12, 5, 27, 3, 19])) // 3

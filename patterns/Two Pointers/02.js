// Sum of Pair

// Напишите функцию, которая принимает массив чисел и целевое число (target). Функция должна определить, существуют ли в массиве два разных элемента, сумма которых строго равна значению target.

function hasPair(arr, target) {
  let left = 0
  let right = arr.length - 1

  while(left < right) {
    const sum = arr[left] + arr[right]

    if(sum === target) {
      return true
    }

    if(sum < target) {
      left++
    } else {
      right--
    }
  }

  return false
}

console.log(hasPair([1, 2, 3, 4, 5, 6, 7, 8], 5)) // true (3)  
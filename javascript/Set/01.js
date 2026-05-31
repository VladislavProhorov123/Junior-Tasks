// Contains Duplicate 

// Напишите фунцию которая принимает массив чисел и возращает true, если в массиве есть хотя бы один дубликат. Если все элементы уникальны, вернуть false.

function containsDuplicate(arr) {
  const set = new Set()

  for(const num of arr) {
    if(set.has(num)) {
      return true
    } 
    set.add(num)
  }

  return false
}

console.log(containsDuplicate([1, 2, 3, 1, 4, 5])) // true 
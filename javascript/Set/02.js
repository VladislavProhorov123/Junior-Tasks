// Remove Duplicates 

// Напишите функцию, которая принимает массив чисел и возвращает новый массив без дубликатов.

function removeDuplicates(arr) {
  return [...new Set(arr)]
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7])) // [1, 2, 3, 4, 5, 6, 7]

// Или более развернутый вариант

function removeDuplicates2(arr) {
  const set = new Set()

  for(const num of arr) {
    set.add(num)
  }

  return [...set]
}

console.log(removeDuplicates2([1, 2, 2, 3, 4, 4, 5, 6, 7, 7])) // [1, 2, 3, 4, 5, 6, 7]
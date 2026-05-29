// Check for Palindrome

function isPalindrome(num) {
  let num1 = num.split('').reverse().join('')
  return num === num1 ? "Yes it is" : "No it isn't"
}

console.log(isPalindrome("121")) // Yes it is
console.log(isPalindrome("911")) // No it isn't

// Check for Palindrome (Two Pointers)

function isPalindromeTwoPointers(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')

  let left = 0
  let right = cleaned.length - 1

  while(left < right) {
    if(cleaned[left] !== cleaned[right]) {
      return false
    }

    left++
    right--
  }

  return true
}

console.log(isPalindromeTwoPointers("racecar")); // true
console.log(isPalindromeTwoPointers("hello")); // false
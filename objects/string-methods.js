let name = 'Thomas       '

console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase())


console.log(name.toLowerCase())

// includes

let password = 'abc124password455'
console.log(password.includes('password'))

//trim

console.log(name.trim())

let isValidPassword = function(pword) {
  return pword.length < 9 || pword.includes('password')
}

console.log(isValidPassword('asdfg'))
console.log(isValidPassword('asdfjasdkfbsdf'))
console.log(isValidPassword('asdfpasswordsdf32'))

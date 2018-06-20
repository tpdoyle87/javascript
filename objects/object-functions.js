let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zimm',
  pageCount: 723
}

let getSummary = function (book){
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
  }
}
//challenge
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(otherBookSummary.pageCountSummary)

let convertTemp = function (tempIn) {
  return {
    fahernheit: tempIn,
    celsius: (tempIn - 32) * (5/9),
    kelvin: (tempIn + 459.67) * (5/9)
  }
}

let currentTemp = convertTemp(68)
console.log(`It is currently ${currentTemp.fahernheit}F, ${currentTemp.celsius}C and ${currentTemp.kelvin}K`)
let otherCurrentTemp = convertTemp(101)
console.log(`It is currently ${otherCurrentTemp.fahernheit}F, ${otherCurrentTemp.celsius}C and ${otherCurrentTemp.kelvin}K`)

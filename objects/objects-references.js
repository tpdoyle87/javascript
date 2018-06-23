let myAccount = {
  name: 'Thomas Doyle-Engler',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses += amount
}
//addIncome
let addIncome = function (account, amount) {
  account.income += amount
}

//resetAccount
let resetAccount = function(account) {
  account.expenses = 0
  account.income = 0
}

//getAccountSummary
  // ex: Account for ${name} has $${expenses} in expenses and $${income} in income.
let getAccountSummary = function(account) {
  let accountBalance = account.income - account.expenses
  return `${account.name} has a balance of $${accountBalance}. There is a total of $${account.expenses} in expenses and $${account.income} in income.`
}

addExpense(myAccount, 2.50)
addIncome(myAccount, 900)
addExpense(myAccount, 325)
addIncome(myAccount, 875)
let summary = getAccountSummary(myAccount)
console.log(summary)
resetAccount(myAccount)
let summary2 = getAccountSummary(myAccount)
console.log(summary2)

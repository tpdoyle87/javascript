const account = {
  name: 'Thomas Doyle-Engler',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      about: description,
      expense: amount
    })

  },
  addIncome: function (description, income) {
    this.income.push({
      description: description,
      income: income
    })
  },

  getAccountSummary: function () {
    let totalIncome = 0
    let totalExpenses = 0

    for (count = 0; count < this.expenses.length; count++) {
      totalExpenses += this.expenses[count].expense
    }
    this.income.forEach(function(money){
      totalIncome += money.income
    })
    let balance = totalIncome - totalExpenses
    return `${this.name} has a balance of $${balance}. $${totalIncome} in income and $${totalExpenses} in expenses.`
  }
}

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweat get Account summary to print income - expenses
// for account balance
//ex: Thomas Doyle-Engler has a balance of $10. 100 in income 90 in expenses

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

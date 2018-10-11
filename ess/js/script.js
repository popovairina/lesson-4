'use strict';

document.addEventListener("DOMContentLoaded", function() {
    let budget, date,
        appData = {
          budget: 0,
            date: 0,
            expenses: {},
            optionalExpenses: {},
            income: [],
            savings: false,
            requireBudgetAndDate: function () {
                budget = +prompt('Ваш бюджет на месяц?', '');
                date = new Date(prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'));
                while (isNaN(budget) || budget == '' || budget == null) {
                    budget = +prompt('Ваш бюджет на месяц?', '');
                }
                appData.budget = budget;
                appData.date = date;
            },
            detectLevel: function () {
                if (budgetPerDay < 100) {
                    console.log('Минимальный уровень достатка');
                } else if (budgetPerDay > 100 && budgetPerDay < 2000) {
                    console.log('Средний уровень достатка');
                } else if (budgetPerDay > 2000) {
                    console.log('Высокий уровень достатка');
                } else {
                    console.log('Что-то пошло не так');
                }
            },
            detectDayBudget: function () {
                return budgetPerMonth / 30;
            },
            chooseExpenses: function () {
                for (let i = 0; i < 2; i++) {
                    let expensesItem =  prompt('Введите обязательную статью расходов в этом месяце', ''),
                        expensesCost =  +prompt('Во сколько обойдется?', '');
                    if (typeof(expensesItem) === 'string' && typeof(expensesItem) != null && typeof(expensesCost) != null
                        && expensesItem != '' && expensesCost != '' && expensesItem.length < 50) {
                        console.log("done");
                        appData.expenses[expensesItem] = expensesCost;
                    } else if (i >= 0) {i--}
                }
            },
            chooseOptExpenses: function (repeat) {
                for (let i = 0; i < repeat; i++) {
                    let optExpense = prompt("Статья необязательных расходов?");
                    appData.optionalExpenses[i+1] = optExpense;
                }
            },
            chooseIncome: function () {
              let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
              while (typeof(items) != 'string' && items == '' && items == null) {
                  items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
              }
              appData.income = items.split(', ');
              appData.income.forEach(function(item, i) {
                console.log('Способы доп. заработка: ' + i + ' - ' + item);
              });
            }
        };

    appData.requireBudgetAndDate();
    // appData.chooseExpenses();

    let budgetPerMonth = appData.budget,
        budgetPerDay = appData.detectDayBudget();

    document.getElementById('budgetMonth').value = budgetPerDay;
    console.log(budgetPerDay);

    appData.detectLevel();

    appData.chooseIncome();

    appData.chooseOptExpenses(3);

    console.log(appData);

    for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key + ' = ' + appData[key]);
    }

});
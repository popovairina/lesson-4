'use strict';

document.addEventListener("DOMContentLoaded", function() {
    let budget, date,
        appData = {
          budget: 0,
            date: 0,
            expenses: {},
            optionalExpenses: {},
            income: [],
            savings: false
        };

    requireBudgetAndDate();

    let budgetPerMonth = appData.budget,
        budgetPerDay = detectDayBudget(budgetPerMonth);

    document.getElementById('budgetMonth').value = budgetPerDay;
    console.log(budgetPerDay);

    detectLevel(budgetPerDay);

    chooseOptExpenses(3);

    // Цикл for //
    // for (let i = 0; i < 2; i++) {
    //     let expensesItem =  prompt('Введите обязательную статью расходов в этом месяце', ''),
    //         expensesCost =  +prompt('Во сколько обойдется?', '');
    //     if (typeof(expensesItem) === 'string' && typeof(expensesItem) != null && typeof(expensesCost) != null
    //         && expensesItem != '' && expensesCost != '' && expensesItem.length < 50) {
    //         console.log("done");
    //         appData.expenses[expensesItem] = expensesCost;
    //     } else if (i >= 0) {i--}
    // }

    // Запрос бюджета и даты
    function requireBudgetAndDate() {
        budget = +prompt('Ваш бюджет на месяц?', '');
        date = new Date(prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'));
        while (isNaN(budget) || budget == '' || budget == null) {
            budget = +prompt('Ваш бюджет на месяц?', '');
        }
        appData.budget = budget;
        appData.date = date;
    }

    // Расчет дневного бюджета
    function detectDayBudget(a) {
        let dayBudget = a / 30;
        return dayBudget;
    }

    //Расчет уровня достатка
    function detectLevel(n) {
        if (n < 100) {
            console.log('Минимальный уровень достатка');
        } else if (n > 100 && n < 2000) {
            console.log('Средний уровень достатка');
        } else if (n > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Что-то пошло не так');
        }
    }

    // Определение необязательных расходов
    function chooseOptExpenses(repeat) {
        for (let i = 0; i < repeat; i++) {
            let optExpense = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i+1] = optExpense;
        }
    }


    console.log(appData);

});
'use strict';

let money, time;

function start () {
    money = +prompt('ваш бюджет на месяц', "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('ваш бюджет на месяц', "");

    }
}
start ();



let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function () {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                    b = prompt("Во сколько обойдется?", '');
            
                if ((typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null
                    && a != '' && b != '' && a.length < 50) {
                    console.log('done');
                    appData.expenses[a] = b; // ключ-значение
                } else {
                    console.log('плохое значение');
                    i--;
            
                }   
            }
        },
        detectDayBudget: function () {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert('Ежедневный бюджет:' + appData.moneyPerDay + "руб.");
        },
        detectLevel: function () {
            if(appData.moneyPerDay < 100) {
                console.log('Минимальный уровень достатка');
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log('Средний уровень достатка');
            } else if(appData.moneyPerDay > 2000) {
                console.log('Высокий уровень достатка');
            } else {
                console.log('Произошла ошибка');
            }
        },
        checkSavings: function () {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
        
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " +appData.monthIncome);
            }
        },
        chooseOptExpenses: function () {
            for (let i=1; i<=3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?")
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            }
        },
        chooseIncome: function () {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            //проверка
            if (typeof(items) != "string" || items == "" || typeof(items) == null) {
                console.log ('Вы ввели неправильные данные')
            } else {
            appData.income = items.split(', '); //перевести строку в массив данных
            appData.income.push(prompt('Может что-то еще?'));    // добавить новый эллемент в конец массива
            appData.income.sort();       //метод сортировки по алфавиту
            }

            appData.income.forEach(function(itemmassive, i) {
                alert ("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            });
        }
    };

    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key])
    }




 // цикл for
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b; // ключ-значение
//     } else {
//         console.log('плохое значение');
//         i--;

//     }   
// };


// цикл while
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//     console.log('done');
//     appData.expenses[a] = b; // ключ-значение
//     } else {
//         console.log('плохое значение');
//         i--;

//     }
//     i++;   
// }

// цикл do whle
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//     console.log('done');
//     appData.expenses[a] = b; // ключ-значение
//     } else {
//         console.log('плохое значение');
//         i--;

//     }
//     i++;   
// }
// while (i < 2);
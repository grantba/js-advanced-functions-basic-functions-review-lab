// Your code here
function saturdayFun(word = "roller-skate") {
    return `This Saturday, I want to ${word}!`
}

function mondayWork(word = "go to the office") {
    return `This Monday, I will ${word}.`
}

let wrapAdjective = function(flair = "*") {
    return function(word = "special") {
        return `You are ${flair}${word}${flair}!`
    }
}

const Calculator = {add: function add() {return 1 + 3}, subtract: function subtract() {return 1 - 3}, multiply: function multiply() {return 1 * 3}, divide: function divide() {return 10 / 5} };

function actionApplyer (start, array) {
    if (array === []) {
        return start
    }
    else {
        let num = start;
        for (let i = 0; i < array.length; i++) {
            num = array[i](num)
        }
        return num
    }
}
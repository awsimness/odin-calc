let displayNum1;
let operator;
let displayNum2;


function add(n1,n2){
    return n1+n2
}

function subtract(n1,n2) {
    return n1-n2
}

function multiply(n1,n2){
    return n1*n2
}

function divide(n1,n2){
    return n1/n2
}

function operate(displayNum1,operator,displayNum2){
    if (operator=='+'){
        add(displayNum1,displayNum2)
    }
    else if (operator=='-'){
        subtract(displayNum1,displayNum2)
    }
}
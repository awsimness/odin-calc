let displayNum1;
let operator;
let displayNum2;

let press=document.querySelectorAll('.press')
let calculate=document.querySelector('.calculate')
let result=document.querySelector('.result')

let plusBtn=document.querySelector('.plus')
let minusBtn=document.querySelector('.minus')
let divideBtn=document.querySelector('.divide')
let multiplyBtn=document.querySelector('.multiple')

let clear=document.querySelector('.clear')

press.forEach(press => press.addEventListener('click',()=>{
    calculate.innerHTML+=press.innerHTML
}))

plusBtn.addEventListener('click',()=>{
    
})

clear.addEventListener('click',()=> {
    calculate.innerHTML=''
    result.innerHTML=''
})


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
    else if (operator=='/'){
        divide(displayNum1,displayNum2)
    }
    else if(operator=='x'){
        multiply(displayNum1,displayNum2)
    }
}
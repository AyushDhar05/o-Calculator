function add(operand1, operand2) {
    return (+operand1) + (+operand2);
}

function subtract (operand1, operand2) {
    return (+operand1) - (+operand2);
}

function multiply (operand1, operand2) {
    return (+operand1) * (+operand2);
}

function divide (operand1, operand2) {
    return (+operand1) / (+operand2);
}

function operate (operator, operand1, operand2) {
    let res;
    switch(operator) {
        case '+':
            res = add(operand1, operand2);
            break;
        case '-':
            res =  subtract(operand1, operand2);
            break;
        case '*':
            res =  multiply(operand1, operand2);
            break;
        case '/':
            // if(operand2 === '0') {
            //     updateHistory(operand1 + '/');
            //     operand2 = '';
            //     updateResult("No divide by 0. Try again, fam.");
            //     return;
            // }
            res =  divide(operand1, operand2);
            break;
    }
    return Number(res.toPrecision(12));
}

let operand1 = '';
let operand2 = '';
let operator = null;

function updateResult(text) {
    document.querySelector(".displayResult").textContent = text;
}

function updateHistory (text) {
    document.querySelector(".displayHistory").textContent = text;
}


// entering numbers 1 - 9
const numpad = document.querySelector(".numpad");
numpad.addEventListener("click", (e) => {
    const pressedBtn = e.target.closest(".numbtn");
    if(!pressedBtn) return;
    // if (operand1.length >= 12 || operand2.length >= 12) return;
    const val = pressedBtn.textContent;
    if(!operator) {
        if (operand1.length >= 12) return; 
        operand1 += val;
        updateResult(operand1);
    } else {
        if (operand2.length >= 12) return;
        updateHistory(operand1+operator);
        operand2 += val;
        updateResult(operand2);
    }
})

//entering 0 or .
const modify = document.querySelector(".modify");
modify.addEventListener("click", (e) => {
    const btn = e.target.closest(".numbtn");
    if(!btn) return;
    // if (operand1.length >= 12 || operand2.length >= 12) return;
    const val = btn.textContent;
    if(!operator) {
        if (operand1.length >= 12) return;
        if(val==='.' && operand1.includes('.')) return;
        operand1 += val;
        updateResult(operand1);
    } else {
        if (operand2.length >= 12) return;
        if(val==='.' && operand2.includes('.')) return;
        operand2 += val;
        updateResult(operand2);
    }
});

// operations
const opr = document.querySelector(".opr");
opr.addEventListener("click", (e) => {
    const btn = e.target.closest(".oprbtn");
    if(!btn) return;

    const val = btn.id;
    if(!operand1) return;
    if(operator === '/' && (operand2 === "0" || operand2 === "0.")) {
        updateHistory(operand1 + operator);
        operand2 = '';
        updateResult("no can do divide by 0, homie!");
        return;
    }
    switch (val) {
        case '/':
            if(operand2) {
                updateHistory(operand1+operator+operand2);
                operand1 = operate(operator, operand1, operand2).toString();
                operand2 = '';
            }
            operator = val;
            updateResult(operand1 + operator);
            return;
        case '*':
            if(operand2) {
                updateHistory(operand1+operator+operand2);
                operand1 = operate(operator, operand1, operand2).toString();
                operand2 = '';
            }
            operator = val;
            updateResult(operand1 + operator);
            return;
        case '+':
            if(operand2) {
                updateHistory(operand1+operator+operand2);
                operand1 = operate(operator, operand1, operand2).toString();
                operand2 = '';
            }
            operator = val;
            updateResult(operand1 + operator);
            return;
        case '-':
            if(operand2) {
                updateHistory(operand1+operator+operand2);
                operand1 = operate(operator, operand1, operand2).toString();
                operand2 = '';
            }
            operator = val;
            updateResult(operand1 + operator);
            return;
        case '=':
            if(!operand2) return;
            updateHistory(operand1 + operator + operand2);
            const res = operate(operator, operand1, operand2);
            operand1 = res.toString();
            operand2 = '';
            operator = null;
            updateResult(res);
    }
})


// AC logic done
const clear = document.querySelector("#ac");
clear.addEventListener("click", () => {
    operand1 = '';
    operand2 = '';
    operator = null;
    updateResult('');
    updateHistory('');
});

//backspace logic
const back = document.querySelector("#del");
back.addEventListener("click", (e) => {
    if(!operand1) return;
    else if (!operator) {
        operand1 = operand1.substring(0, operand1.length-1);
        updateResult(operand1);
    } else if (!operand2) {
        operator = null;
        updateResult(operand1); 
    } else {
        operand2 = operand2.substring(0, operand2.length-1);
        updateResult(operand2 || (operand1 + operator)); 
    }
});

// keyboard support
window.addEventListener("keydown", (e) => {
    if (/[0-9.]/.test(e.key)) {
        Array.from(document.querySelectorAll(".numbtn")).
            find(b => b.textContent === e.key).click();
    }


    if (['+','-','/','*'].includes(e.key)) {
        Array.from(document.querySelectorAll(".oprbtn")).
            find(b => b.id === e.key).click();
    }

    if (e.key === "Backspace") document.querySelector("#del").click();
    if (e.key === "Escape") document.querySelector("#ac").click();
    if (e.key === "Enter" || e.key === '=') {
        e.preventDefault();
        document.getElementById("=").click();
    } 
});
const outPutNumber = document.getElementById("inputNum");

function displayNum(num) {
    outPutNumber.value += num;
}

function Clear() {
    outPutNumber.value = "";
}

function btnDelete() {
    outPutNumber.value = outPutNumber.value.slice(0, -1);
}

document.addEventListener("keydown", function(event){
    if (/[a-zA-Z]/.test(event.key)) {
        outPutNumber.value = "";
    }
});

document.addEventListener("keydown", function(event){
        if (/[0-9]/.test(event.key)) {
            outPutNumber.value += event.key;
    }
});

document.addEventListener("keydown", function(event){
    if (event.key === 'Backspace') {
        outPutNumber.value = outPutNumber.value.slice(0, -1);
    }
});

document.addEventListener("keydown", function(event) {
  switch (event.code) {
    case "NumpadAdd":
      displayNum('+');
      break;
    case "NumpadSubtract":
      displayNum('-');
      break;
    case "NumpadMultiply":
      displayNum('*');
      break;
    case "NumpadDivide":
      displayNum('/');
      break;
    case "NumpadDecimal":
      btnEqual();
      break;
    case "NumpadDecimal":
      displayNum('.');
      break;
    case "Equal":
      btnEqual();
      break;
    
  }
});

function btnEqual() {
    try {
        let input = outPutNumber.value;
        let lastChar = input[input.length - 1];
        let operands = input.split(/[+\-*/]/);
        let operator;

        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            input = input.slice(0, -1);
        }

        if (input.includes("+")) {
            operator = "+";
        } else if (input.includes("-")) {
            operator = "-";
        } else if (input.includes("*")) {
            operator = "*";
        } else if (input.includes("/")) {
            operator = "/";
        }

        switch(operator) {
            case "+":
                outPutNumber.value = parseFloat(operands[0]) + parseFloat(operands[1]);
                break;
            case "-":
                outPutNumber.value = parseFloat(operands[0]) - parseFloat(operands[1]);
                break;
            case "*":
                outPutNumber.value = parseFloat(operands[0]) * parseFloat(operands[1]);
                break;
            case "/":
                outPutNumber.value = parseFloat(operands[0]) / parseFloat(operands[1]);
                break;
            default:
                outPutNumber.value = input;
        }
    } catch(err) {
        outPutNumber.value = "Error Input";
    }
}

// deleting this code it suggesting that dont use this approach

// function btnEqual(){
//     try {
//     outPutNumber.value = eval(outPutNumber.value);
//     }
//     catch(err) {
//         outPutNumber.value = "Error Input";
//     }
// }







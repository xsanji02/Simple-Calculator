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
      displayNum('.');
      break;
    case "Equal":
      btnEqual();
      break;
  }
});

  

function btnEqual(){
    try {
    outPutNumber.value = eval(outPutNumber.value);
    }
    catch(err) {
        outPutNumber.value = "Error Input";
    }
}







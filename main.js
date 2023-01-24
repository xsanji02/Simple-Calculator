const outPutNumber = document.getElementById("inputNum");

function displayNum(num) {
    outPutNumber.value += num;
}

function btnEqual(){
    try {
    outPutNumber.value = eval(outPutNumber.value);
    }
    catch(err) {
        outPutNumber.value = "Error Input";
    }
}

function Clear() {
    outPutNumber.value = "";
}
function btnDelete() {
    outPutNumber.value = outPutNumber.value.slice(0, -1);
}






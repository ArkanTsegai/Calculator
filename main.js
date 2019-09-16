function cal() {
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);
    let oper = document.querySelector("#Operator").value;
    let calculate;

    if (oper == "Add"){
        calculate = a + b;
    } else if (oper == "Min") {
        calculate = a - b;
    } else if (oper == "Mul"){
        calculate = a * b;
    } else if (oper == "div") {
        calculate = a / b;
    }
    
    document.querySelector("#result").innerHTML = calculate;
}
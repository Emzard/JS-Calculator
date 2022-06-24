var isRunning = true;

while (isRunning == true) {

    operator = prompt("What operation would you like to perform? ( + , - , * , / , % ) ");

    var firstNumber = Number(prompt("Input the first number: "));
    var secondNumber = Number(prompt("Input the second number: "));


    if (operator == '+') {

        alert(firstNumber + secondNumber);
        break
    }

    else if (operator == '-') {

        alert(firstNumber - secondNumber);
        break
    }

    else if (operator == '*') {
    
        alert(firstNumber * secondNumber);
        break
    }

    else if (operator == '/') {
    
        alert(firstNumber / secondNumber);
        break
    }

    else if (operator == '%') {
    
        alert(firstNumber % secondNumber);
        break
    }

    else {
        
        alert("Sorry, that isn't a valid operator. Try again...");
    }
}

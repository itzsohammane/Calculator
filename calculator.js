const display = document.getElementById('display');


//Add numbers and operators to the display

function appendValue(value){
    display.value += value;
}

//Clears the entire display

function clearDisplay(){
    display.value = '';
}

//Calculates the matheathetical expression

function calculate(){
    try {
        //using eval() evaluate the string as math
        display.value = eval(display.value);
    } catch (Error) {
       //Handles invalid  expressions
       display.value = 'Error';
    }
}
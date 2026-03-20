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
        // Check if user is trying to divide by zero
        if (display.value.includes('/0')) {
            display.value = 'Error';
            return;
        }

        let result = eval(display.value);

        // Handle cases like Infinity (JS returns this for division by 0)
        if (result === Infinity || result === -Infinity) {
            display.value = 'Error';
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = 'Error';
    }
}
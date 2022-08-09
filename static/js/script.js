var result = "result"
var x_bool = 0


// clears function
function clears() {
    document.getElementById(result).value = "0";
}

//delete function
function del() {
    let number = document.getElementById(result).value;
    let string_number = number.toString()
    let num1 = string_number.length // digit of a number

    for (num1 = 0; num1 < 1; num1++) {
        let slice = num1 - 1
        let digit_string = String(number).slice(0, slice)
        let digit_int = Number(digit_string)
        let eq = number - digit_int
        let sum = number - eq
        document.getElementById(result).value = sum
    }

}

// Clears Entry (CE)
function ce() {
    first_number = document.getElementById(result).value
    let zero = Number(0)
    document.getElementById(result).value = ""
    document.getElementById(result).value = zero
    console.log(first_number)
}
// x*x function
function sqr() {

    var first_number = document.getElementById(result).value;
    let sum = Math.pow(first_number, 2)
    document.getElementById(result).value = sum

}

function sqrt() {
    var first_number = document.getElementById(result).value;
    let sum = Math.sqrt(first_number)
    document.getElementById(result).value = sum
}

// displaying values to result
function display(values) {
    let ans = document.getElementById(result).value;

    if (ans == 0) {
        document.getElementById(result).value = ""
        document.getElementById(result).value += values
    } else {
        document.getElementById(result).value += values;

    }



}
// minus function
function minus() {

    x_bool = 1
    var first_number = document.getElementById(result).value;
    f_number = first_number
    document.getElementById(result).value = ""

}
// plus function
function plus() {
    x_bool = 2
    var first_number = document.getElementById(result).value;
    f_number = first_number
    document.getElementById(result).value = ""
}
// multiply function
function multiply() {
    x_bool = 3
    var first_number = document.getElementById(result).value;
    f_number = first_number
    document.getElementById(result).value = ""
}
// division function
function devide() {
    x_bool = 4
    var first_number = document.getElementById(result).value;
    f_number = first_number
    document.getElementById(result).value = ""
}

function add_dot() {
    document.getElementById(result).value += "."
}

function calculate() {
    if (x_bool == 1) {
        second_number = document.getElementById(result).value;
        sum = f_number - second_number
        console.log(sum, f_number, second_number)
        document.getElementById(result).value = sum;

    } else if (x_bool == 2) {
        second_number = document.getElementById(result).value;
        sum = parseInt(f_number) + parseInt(second_number)
        console.log(sum, f_number, second_number)
        document.getElementById(result).value = sum;
    } else if (x_bool == 3) {
        second_number = document.getElementById(result).value;
        sum = f_number * second_number
        console.log(sum, f_number, second_number)
        document.getElementById(result).value = sum;
    } else if (x_bool == 4) {
        second_number = document.getElementById(result).value;
        sum = f_number / second_number
        console.log(sum, f_number, second_number)
        document.getElementById(result).value = sum;
    }







}
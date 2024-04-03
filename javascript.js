let display = document.querySelector('#display');
let buttons = document.querySelectorAll('button');

let string = ""

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML == "AC") {
            string = ""
            display.value = string
        } else if (button.innerHTML == "=") {
            string = eval(string);
            display.value = string;
        } else if (button.innerHTML == "del") {
            string = string.substring(0, string.length - 1)
            display.value = string
        } else {
            string += button.innerHTML
            display.value = string
        }
    })
})
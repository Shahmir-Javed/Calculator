const result = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
const arr = Array.from(buttons);

let string = '';

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string).toString();
            result.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            result.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            result.value = string;
        } else if (e.target.innerHTML == '.') {
            const lastSegment = string.split(/[\+\-\*\/\%]/).pop();
            if (!lastSegment.includes('.')) {
                string += e.target.innerHTML;
                result.value = string;
            }
        } else {
            string += e.target.innerHTML;
            result.value = string;
        }
    })
})
function main(value) {
    document.querySelector('.All-Input').value += value;
}
function clearInput() {
    document.querySelector('.All-Input').value = '';
}
function performOperation(operator) {
    document.querySelector('.All-Input').value += operator;
}
function calculateResult() {
    let input = document.querySelector('.All-Input').value;
    let result = eval(input);

    document.querySelector('.All-Input').value = result;
}


let arg1 = +prompt('Введите первое число');
let arg2 = +prompt('Введите второе число');
let operation = prompt('Введите название операции, которую нужно сделать с числами');
operation = operation.toLowerCase();


function sum(arg1, arg2) {
    return (arg1 + arg2);
}
function subtraction(arg1, arg2) {
    return (arg1 - arg2);
}
function multiplication(arg1, arg2) {
    return (arg1 * arg2);
}
function division(arg1, arg2) {
    return (arg1 / arg2);
}


function mathOperation(arg1, arg2, operation) {
    let rezult;
    switch (operation) {
        case 'сложить':
        case 'прибавить':
        case 'приплюсовать':
            rezult = sum(arg1, arg2);
            break;
        case 'вычесть':
        case 'разница':
        case 'отнять':
            rezult = subtraction(arg1, arg2);
            break;
        case 'умножить':
        case 'помножить':
        case 'произведение':
            rezult = multiplication(arg1, arg2);
            break;
        case 'разделить':
        case 'поделить':
        case 'деление':
            rezult = division(arg1, arg2);
            break;
        default:
            alert('Вы ввели некорректное название операции')
            break;
    }
    return (rezult);
}

alert(mathOperation(arg1, arg2, operation));


let display = document.querySelector('.display input');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-result-equal]');
const deleteBtn = document.querySelector('[data-delete-val]');
const clearAllBtn = document.querySelector('[data-clear-all]');

clearAllBtn.addEventListener('click', () => {
    clear();
});
deleteBtn.addEventListener('click', () => {
    deleteVal();
});

const calcNumbers = (input) => {
    if (input === '-' || input === '/' || input === '*' || input === '+') {
        chooseOperation(input);
    } else {        
        appendNumber(input);
        
    }
}

const chooseOperation = (operation) => {
    display.value += operation;   
    
}
const appendNumber = (number) => {
     
    return display.value += number;
}
const clear = () => {
     display.value = '';   
}
const deleteVal = () => {
    display.value = display.value.toString().slice(0, -1);
}

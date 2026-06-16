/* ============================================
   CALCULATOR - JAVASCRIPT LOGIC
   Professional calculator with error handling
   ============================================ */

// DOM Elements
const display = document.getElementById('display');

// State Management
const calculatorState = {
    currentInput: '',
    previousInput: '',
    operator: null,
    shouldResetDisplay: false
};

/**
 * Appends a number to the current input
 * @param {string} num - The number or decimal point to append
 */
function appendNumber(num) {
    const { currentInput, shouldResetDisplay } = calculatorState;
    
    // Prevent multiple decimal points
    if (num === '.' && currentInput.includes('.')) {
        return;
    }
    
    // Prevent leading zeros
    if (num === '0' && currentInput === '0') {
        return;
    }
    
    // Reset display after calculation
    if (shouldResetDisplay) {
        calculatorState.currentInput = num === '.' ? '0.' : num;
        calculatorState.shouldResetDisplay = false;
    } else {
        // Remove leading zero when entering first digit
        if (currentInput === '0' && num !== '.') {
            calculatorState.currentInput = num;
        } else {
            calculatorState.currentInput += num;
        }
    }
    
    updateDisplay();
}

/**
 * Appends an operator to perform calculations
 * @param {string} op - The operator (+, -, *, /)
 */
function appendOperator(op) {
    const { currentInput, previousInput, operator } = calculatorState;
    
    // Don't proceed if no current input
    if (currentInput === '') {
        return;
    }
    
    // If there's a previous operation, calculate it first
    if (previousInput !== '' && operator !== null && !calculatorState.shouldResetDisplay) {
        calculate();
    }
    
    // Store the current state
    calculatorState.operator = op;
    calculatorState.previousInput = calculatorState.currentInput;
    calculatorState.currentInput = '';
    calculatorState.shouldResetDisplay = false;
}

/**
 * Calculates the result based on the stored values and operator
 */
function calculate() {
    const { currentInput, previousInput, operator } = calculatorState;
    
    // Don't calculate if values are missing
    if (currentInput === '' || previousInput === '' || operator === null) {
        return;
    }
    
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;
    
    // Perform calculation based on operator
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            // Handle division by zero
            if (current === 0) {
                calculatorState.currentInput = 'Error: Division by zero';
                updateDisplay();
                calculatorState.shouldResetDisplay = true;
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    // Round to avoid floating point errors
    result = Math.round(result * 100000000) / 100000000;
    
    // Update state with result
    calculatorState.currentInput = result.toString();
    calculatorState.operator = null;
    calculatorState.previousInput = '';
    calculatorState.shouldResetDisplay = true;
    
    updateDisplay();
}

/**
 * Clears all inputs and resets the calculator
 */
function clearDisplay() {
    calculatorState.currentInput = '';
    calculatorState.previousInput = '';
    calculatorState.operator = null;
    calculatorState.shouldResetDisplay = false;
    
    updateDisplay();
}

/**
 * Deletes the last digit from current input
 */
function deleteLast() {
    if (calculatorState.shouldResetDisplay) {
        calculatorState.currentInput = '';
        calculatorState.shouldResetDisplay = false;
    } else {
        calculatorState.currentInput = calculatorState.currentInput.slice(0, -1);
    }
    
    updateDisplay();
}

/**
 * Updates the display with current input value
 */
function updateDisplay() {
    const displayValue = calculatorState.currentInput || '0';
    display.value = displayValue;
}

/**
 * Handle keyboard input
 */
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Number keys
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    }
    
    // Decimal point
    if (key === '.') {
        appendNumber('.');
    }
    
    // Operators
    if (key === '+') {
        appendOperator('+');
    }
    if (key === '-') {
        appendOperator('-');
    }
    if (key === '*') {
        appendOperator('*');
    }
    if (key === '/') {
        event.preventDefault();
        appendOperator('/');
    }
    
    // Enter or equals
    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    }
    
    // Backspace for delete
    if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    }
    
    // Escape for clear
    if (key === 'Escape') {
        clearDisplay();
    }
});

// Initialize display
updateDisplay();
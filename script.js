document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let previousInput = '';
    let operator = '';
  
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;
  
        // Clear all
        if (value === 'AC') {
          currentInput = '';
          previousInput = '';
          operator = '';
          display.textContent = '0';
          return;
        }
  
        // Equal button
        if (value === '=') {
          if (currentInput && previousInput && operator) {
            try {
              currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
              display.textContent = currentInput;
            } catch {
              display.textContent = 'Error';
            }
            previousInput = '';
            operator = '';
          }
          return;
        }
  
        // Square button
        if (value === 'x²') {
          if (currentInput) {
            currentInput = String(Math.pow(parseFloat(currentInput), 2));
            display.textContent = currentInput;
          }
          return;
        }
  
        // Operators
        if (['+', '-', '*', '/', '%'].includes(value)) {
          if (currentInput) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
          }
          return;
        }
  
        // Numbers and decimal point
        if (value === '.' && currentInput.includes('.')) return;
        currentInput += value;
        display.textContent = currentInput;
      });
    });
  });
  
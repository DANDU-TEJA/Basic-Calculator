let display = document.getElementById('result');

// Appends the clicked value to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clears the display
function clearDisplay() {
  display.value = '';
}

// Deletes the last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculates the result based on the input and handles errors
function calculate() {
  try {
    // Ensure the expression follows BODMAS/BIDMAS
    display.value = eval(display.value);
  } catch (error) {
    // Handle errors like division by zero or invalid input
    display.value = 'Error';
  }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
  if (event.key >= 0 && event.key <= 9) {
    appendToDisplay(event.key);
  } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    appendToDisplay(event.key);
  } else if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Backspace') {
    deleteLast();
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});

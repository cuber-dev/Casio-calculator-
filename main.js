// Get references to the HTML elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Set up event listeners for each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "C") {
      // Clear the display
      display.textContent = "0";
    } else if (button.value === "=") {
      // Evaluate the expression in the display
      display.textContent = eval(display.textContent);
    } else {
      // Append the button value to the display
      if (display.textContent === "0") {
        display.textContent = button.value;
      } else {
        display.textContent += button.value;
      }
    }
  });
});


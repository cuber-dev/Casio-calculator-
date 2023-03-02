let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click',() => {
    if(button.value === "C"){
      display.textContent = "0";
    }
    else if(button.value === "="){
      display.textContent = eval(display.textContent);
    }
    else{
      if(display.textContent === "0"){
        display.textContent = button.value;
      }
      else{
        display.textContent += button.value;
      }
    }
  });
});
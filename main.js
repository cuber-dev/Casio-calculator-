let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click',() => {
    if(button.value === "C"){
      display.textContent = "0";
    }
    else if(button.value === "DE"){
      let exp = display.textContent;
      display.textContent = exp.slice(0,exp.length - 1);
    }
    else if(button.value === "="){
      try{
        let exp = display.textContent.replace('x','*');
        let result = eval(display.textContent.replace(',',''));
        display.textContent = result.toLocaleString();
      }catch(e){
        display.textContent = 'Invalid expression';
      }
    }
    else{
      if(display.textContent === "0" || display.textContent === "Invalid expression"){
        display.textContent = button.value;
      }
      else{
        display.textContent += button.value;
        display.textContent = display.textContent.toLocaleString();
      }
    }
  });
});
let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click',() => {
    if(button.value === "C"){
      display.innerText = "0";
    }
    else if(button.value === "DE"){
      let exp = display.innerText;
      display.innerText = exp.slice(0,exp.length - 1);
    }
    else if(button.value === "="){
      try{
        let exp = display.innerText.replace('x','*');
        let result = eval(exp.replace(',',''));
        display.innerText = String(result).includes('+') ? result : result.toLocaleString();
      }catch(e){
        display.innerText = 'Invalid expression';
      }
    }
    else{
      if(display.innerText === "0" || display.innerText === "Invalid expression"){
        display.innerText = button.value;
      }else if(display.innerText.includes('.') && button.value === '.'){
        return;
      }else{
        display.innerText += button.value;
      }
    }
  });
});

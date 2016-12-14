var num1input = document.getElementById("num1");
var selector = document.getElementById("selector");
var num2input = document.getElementById("num2");
var solve = document.getElementById("solve");
var display = document.getElementById("display");

solve.addEventListener("click", function(){
  var num1 = num1input.value;
  var num2 = num2input.value;
  
  
  //add
 if(selector.value === "+"){
    var answer = +num1 + +num2;
    display.innerHTML = answer;
  }
  //subtract
  else if(selector.value === "-"){
    var answe = num1 - num2; 
    display.innerHTML = answe;
  }
  //multiply
   else if(selector.value === "*"){
    var answ = num1 * num2; 
    display.innerHTML = answ;
  }
  //divide
   else if(selector.value === "/"){
    var ans = num1 / num2; 
    display.innerHTML = ans;
  }
  //powering numbers
  else if(selector.value === "powerof"){
    var an = Math.pow(num1,num2);
    display.innerHTML = an;
  }
  //square root input of the second box
  else if(selector.value === "sqrt"){
    var a = Math.sqrt(num2);
    display.innerHTML = a;
  }
  
  
});
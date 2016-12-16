//Varibles for input box, the button and div display
var inp=document.getElementById("inp");
var btn=document.getElementById("btn");
var disp=document.getElementById("disp");
//button event listener,click
btn.addEventListener("click",function(){
  disp.innerHTML+="<div>"+ inp.value+"</div>"

});
//remove item from list
disp.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
})
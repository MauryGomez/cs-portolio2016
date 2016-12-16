var inp=document.getElementById("inp");
var btn=document.getElementById("btn");
var disp=document.getElementById("disp");

btn.addEventListener("click",function(){
  disp.innerHTML+="<div>"+ inp.value+"</div>"

});

disp.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
})
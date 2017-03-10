var todo = document.getElementById("todo");
var list = document.getElementById("list");
var disp = document.getElementById("disp");
var color = document.getElementById("color")
var clearBtn = document.getElementById("clearBtn")


list.addEventListener("click", function() {

  if (color.value === "pink") {
    disp.innerHTML += "<div style='color:pink'>" + todo.value + "</div>"

  }
  else if (color.value === "red") {
    disp.innerHTML += "<div style='color:red'>" + todo.value + "</div>"

  }
  else if (color.value === "black") {
    disp.innerHTML += "<div style='color:black'>" + todo.value + "</div>"

  }

  else if (color.value === "green") {
    disp.innerHTML += "<div style='color:green'>" + todo.value + "</div>"

  }
});

disp.addEventListener("click", function(evt) {
  evt.target.parentNode.removeChild(evt.target);
})


clearBtn.addEventListener("click", function() {
  disp.innerHTML = ""
})

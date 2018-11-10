var idCounter = 0;

var elementDiv = document.createElement("div");
var diode = new Diode(true, elementDiv);
diode.elem.style.margin = "auto";
var text = document.createElement("p");
text.innerHTML = "Диод";
text.style.textAlign = "center";
elementDiv.appendChild(text);
document.getElementById("elementPanel").appendChild(elementDiv);

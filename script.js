var elementDiv = document.createElement("div");
var diode = new Diode(true, elementDiv);
diode.elem.style.marginLeft = "auto";
diode.elem.style.marginRight = "auto";
var text = document.createElement("p");
text.innerHTML = "Диод";
text.style.textAlign = "center";
elementDiv.appendChild(text);
document.getElementById("elementPanel").appendChild(elementDiv);

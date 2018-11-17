function addElementToPanel(name, elementClass){

    var elementDiv = document.createElement("div");
    var elementImgSpan = document.createElement("span");
    elementImgSpan.className = "elementPanelImgSpan";
    new elementClass(true, elementImgSpan);
    var text = document.createElement("p");
    text.innerHTML = name;
    text.style.textAlign = "center";
    elementDiv.appendChild(elementImgSpan);
    document.getElementById("elementPanel").appendChild(elementDiv);
    elementDiv.appendChild(text);
    elementImgSpan.style.height = elementImgSpan.children[0].style.height;

}

addElementToPanel("Диод", Diode);
addElementToPanel("Резистор", Resistor);
addElementToPanel("Светодиод", LED_Diode);
addElementToPanel("Транзистор", Transistor);
addElementToPanel("Переключатель", Switch);
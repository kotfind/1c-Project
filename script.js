function addElementToPanel(name, elementClass, height){

    var elementDiv = document.createElement("div");
    var elementImgSpan = document.createElement("div");
    elementImgSpan.className = "elementPanelImgSpan";
    new elementClass(true, elementImgSpan);
    var text = document.createElement("p");
    text.innerHTML = name;
    text.style.textAlign = "center";
    elementImgSpan.style.height = height != undefined ? height + "px" : "40px";
    elementDiv.appendChild(elementImgSpan);
    document.getElementById("elementPanel").appendChild(elementDiv);
    elementDiv.appendChild(text);

}

addElementToPanel("Диод", Diode);
// addElementToPanel("Резистор", Resistor);
// addElementToPanel("Светодиод", LED_Diode);
// addElementToPanel("Транзистор", Transistor, 97);
// addElementToPanel("Переключатель", Switch);

var selectedPoint;

// new Point(200, 300);
// new Point(250, 250);
// new Point(300, 500);

document.getElementById("elementPanel").onscroll = function(){
    console.log(window.pageYOffset);
}
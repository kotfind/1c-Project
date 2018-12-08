var selectedPoint;
var pointNumber;
var wireNumber;

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

// var p1 = new Point(200, 200);
// var p2 = new Point(400, 250);
// var p3 = new Point(500, 150);
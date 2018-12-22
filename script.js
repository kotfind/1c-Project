var selectedPoint;
var selectedWire;
var pointNumber = 0;
var wireNumber = 0;
var delMode = false;
var oneTimeStop = 0;

document.getElementById("wireSlider").oninput
     = document.getElementById("wireColorField1").oninput
     = document.getElementById("wireColorField2").oninput
     = document.getElementById("wireColorField3").oninput //
     = document.getElementById("wireSlider").onclick
     = document.getElementById("wireColorField1").onclick
     = document.getElementById("wireColorField2").onclick
     = document.getElementById("wireColorField3").onclick = function(){

    if(selectedWire!=undefined) {
        
        selectedWire.firstWireLengthPer100 = document.getElementById("wireSlider").value;
        selectedWire.editMode(selectedWire.modeIsHorizontal);

        selectedWire.wire1.style.backgroundColor = selectedWire.wire2.style.backgroundColor = selectedWire.wire3.style.backgroundColor = 
        "rgba(" + (selectedWire.color[0] = document.getElementById("wireColorField1").value) + ", " + (selectedWire.color[1] = document.getElementById("wireColorField2").value) + ", " + (selectedWire.color[2] = document.getElementById("wireColorField3").value) + ", 0.8)";

        oneTimeStop = 1;

    }
}

document.onclick = function(e){

    if(oneTimeStop == 0){

        selectedWire = undefined;
        document.getElementById("wireSlider").setAttribute("disabled", "");
        document.getElementById("wireSlider").style.opacity = 0;
        document.getElementById("propertiesPanel").style.opacity = 0;
        document.getElementById("wireColorField1").style.opacity = 0;
        document.getElementById("wireColorField2").style.opacity = 0;
        document.getElementById("wireColorField3").style.opacity = 0;

    }else{
        oneTimeStop--;
    }

}

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

document.getElementById("delModeButton").onclick = function(){

    delMode = !delMode;
    this.style.opacity = delMode? 1 : 0.5;

}

addElementToPanel("Диод", Diode);
addElementToPanel("Резистор", Resistor);
addElementToPanel("Светодиод", LED_Diode);
addElementToPanel("Транзистор", Transistor, 97);
addElementToPanel("Переключатель", Switch);
addElementToPanel("Батарейка", Source);

// var p1 = new Point(200, 200);
// var p2 = new Point(400, 250);
// var p3 = new Point(500, 150);
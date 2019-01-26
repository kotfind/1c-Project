var sourceArray = [];
var elementArray = [];
var chains = [];
var sorceNumber = 0;

document.getElementById("startEmulationButton").onclick = function(e){

    chains = [];

    for(var i = 0; i < sourceArray.length; i++){

        if(sourceArray[i] != undefined){
            elementArray = new Array(elementNumber).fill(0);
            sorceNumber = sourceArray[i].number;
            findWays(sourceArray[i].points[0], undefined, [{type:"source", voltage:sourceArray[i].voltage}], true);
        }
    }

    //console.log(chains);

    emulate();

}

function findWays(lastPoint, lastWire, str, firstStart){

    var point;

    if(!firstStart){

        elementArray[lastPoint.parentElement.number]++;

        if(lastPoint.parentElement.type == "source" && lastPoint.parentElement.number == sorceNumber){

            if(lastPoint.inElementNumber == 2)chains[chains.length] = str;
            return;

        }

        var params = undefined;

        switch (lastPoint.parentElement.type) {
            case "transistor":

                if(lastPoint.inElementNumber == 3  || elementArray[lastPoint.parentElement.number] > 2)return;
                point = lastPoint.parentElement.points[2];
                break;

            case "switch":

                if(elementArray[lastPoint.parentElement.number] > 1 ||
                   !lastPoint.parentElement.isOn)return;
                point = lastPoint.parentElement.points[0].number == lastPoint.number ? lastPoint.parentElement.points[1] : lastPoint.parentElement.points[0];
                break;

            case "resistor":
                if(elementArray[lastPoint.parentElement.number] > 1)return;
                point = lastPoint.parentElement.points[0].number == lastPoint.number ? lastPoint.parentElement.points[1] : lastPoint.parentElement.points[0];
                params = lastPoint.parentElement.resistance;
                break;

            default:
                if(lastPoint.inElementNumber == 2 || elementArray[lastPoint.parentElement.number] > 1)return;
                point = lastPoint.parentElement.points[1];
                break;
        }

        str[str.length] = {"element":point.parentElement,"type":point.parentElement.type, "point1inElementNumber":lastPoint.inElementNumber, "point2inElementNumber":point.inElementNumber};
        if(params != undefined)str[str.length-1]["params"] = params;

    }else{

        point = lastPoint;

    }

    var nowElementArray = elementArray.slice();

    for(var i = 0; i < point.dependedWires.length; i++){

        if(point.dependedWires[i] != undefined && 
          (lastWire == undefined || lastWire.number != point.dependedWires[i].number)){

            elementArray = nowElementArray.slice();
            
            findWays(point.dependedWires[i].parentPoint1.number == point.number ? point.dependedWires[i].parentPoint2 : point.dependedWires[i].parentPoint1 , point.dependedWires[i], str.slice());

        }

    }}

function emulate(){

    for (var i = 0; i < chains.length; i++) {

        if(chains[i] != undefined){
            //the beginning of part of code for each chain

            var chainParams = learnChainParams(i);

            // console.log(chainParams["voltage"]);
            // console.log(chainParams["resistance"]);
            // console.log(chainParams["amperage"]);
            console.log(chainParams["editableElements"]);

            //the ending of part of code for each chain
        }

    }

}

function learnChainParams(chainNumber) {
    
    var paramsArray = {"voltage": chains[chainNumber][0]["voltage"], "resistance": 0, "transistors": [], "led-diodes": []};

    for (var i = 1; i < chains[chainNumber].length; i++) {

        if(chains[chainNumber][i].type == "resistor")paramsArray["resistance"] += chains[chainNumber][i].params;
        else if(chains[chainNumber][i].type == "transistor")paramsArray["transistors"][paramsArray["transistor"].length] = chains[chainNumber][i]; 
        else if(chains[chainNumber][i].type == "led-diode") paramsArray["led-diodes"][paramsArray["led-diodes"].length] = chains[chainNumber][i];

    }
    
    paramsArray["amperage"] = paramsArray["voltage"] / 1.0 / paramsArray["resistance"];

    return paramsArray;}
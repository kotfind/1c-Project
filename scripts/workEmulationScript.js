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
            findWays(sourceArray[i].points[0], undefined, [], true);
        }
    }

    console.log(chains.length);

    for(var i = 0; i < chains.length; i++){

        console.log(chains[i]);

    }

}

function findWays(lastPoint, lastWire, str, firstStart){

    var point;

    if(!firstStart){

        elementArray[lastPoint.parentElement.number]++;

        if(lastPoint.parentElement.type == "source" && lastPoint.parentElement.number == sorceNumber){

            if(lastPoint.inElementNumber == 2)chains[chains.length] = str;
            return;

        }

        switch (lastPoint.parentElement.type) {
            case "transistor":

                if(lastPoint.inElementNumber == 3  || elementArray[lastPoint.parentElement.number] > 2)return;
                else point = lastPoint.parentElement.points[2];
                break;

            case "switch":

                if(elementArray[lastPoint.parentElement.number] > 1 ||
                   !lastPoint.parentElement.isOn)return;
                else point = lastPoint.parentElement.points[0].number == lastPoint.number ? lastPoint.parentElement.points[1] : lastPoint.parentElement.points[0];
                break;

            case "resistor":
                if(elementArray[lastPoint.parentElement.number] > 1)return;
                else point = lastPoint.parentElement.points[0].number == lastPoint.number ? lastPoint.parentElement.points[1] : lastPoint.parentElement.points[0];
                break;

            default:
                if(lastPoint.inElementNumber == 2 || elementArray[lastPoint.parentElement.number] > 1)return;
                else point = lastPoint.parentElement.points[1];
                break;
        }

        str[str.length] = {"element":point.parentElement.type, "point1inElementNumber":lastPoint.inElementNumber, "point2inElementNumber":point.inElementNumber};

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

    }

}
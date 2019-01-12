var sourceArray = [];
var elementArray = [];
var chains = [];
var sorceNumber = 0;

document.getElementById("startEmulationButton").onclick = function(e){

    for(var i = 0; i < sourceArray.length; i++){

        elementArray = new Array(inElementNumber).fill(0);
        findWays(sourceArray[i].point[1]);
        sorceNumber = sourceArray.number;

    }

}

function findWays(lastPoint, lastWire, str){

    elementArray[lastPoint.parentElement.number]++;

    if(lastPoint.parentElement.type == "source" && lastPoint.parentElement.number == sorceNumber){

        if(lastPoint.inElementNumber == 2)chains[chains.length] = str;
        return;

    }

    if(lastPoint.parentElement.type == "transistor"){

        if(lastPoint.inElementNumber == 3  || elementArray[lastPoint.parentElement.number] > 2)return;
        else var point = lastPoint.parentElement.point[3];

    }else{

        if(lastPoint.inElementNumber == 2   || elementArray[lastPoint.parentElement.number] > 1)return;
        else var point = lastPoint.parentElement.point[2];

    }
    
    str += point.parentElement.type + lastPoint.inElementNumber + point.inElementNumber + " ";

    for(var i = 0; i < point.dependentWires.length; i++){

        if(lastWire == undefined || lastWire.number != point.dependentWires[i].number){

            //findWays(point, )

        }

    }

}
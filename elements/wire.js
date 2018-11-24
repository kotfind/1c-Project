class Wire{

    constructor (x1, y1, x2, y2){

        { //graphic part
        var firstHorizontalWire = document.createElement("img");
        var secondHorizontalWire = document.createElement("img");
        var verticalWire = document.createElement("img");

        document.getElementById("elementPanel").appendChild(firstHorizontalWire);
        document.getElementById("elementPanel").appendChild(secondHorizontalWire);
        document.getElementById("elementPanel").appendChild(verticalWire);

        firstHorizontalWire.src = "res/horizontalWire.png";
        secondHorizontalWire.src = "res/horizontalWire.png";
        verticalWire.src = "res/verticalWire.png";

        firstHorizontalWire.style.position = secondHorizontalWire.style.position = verticalWire.style.position = "absolute";
        firstHorizontalWire.style.top = y1 < y2 ? y1 + "px" : y2 + "px";
        firstHorizontalWire.style.left = x1 < x2 ? x1 + "px" : x2 + "px";
        secondHorizontalWire.style.top = y1 > y2 ? y1 + "px" : y2 + "px";
        secondHorizontalWire.style.left = x1 < x2 ? x1 + Math.abs(x1 - x2) / 2 + "px": x2 + Math.abs(x1 - x2) / 2 + "px";
        verticalWire.style.top = y1 < y2 ? y1 + "px" : y2 + "px";
        verticalWire.style.left = x1 < x2 ? x1 + Math.abs(x1 - x2) / 2 + "px": x2 + Math.abs(x1 - x2) / 2 + "px";

        firstHorizontalWire.style.height = secondHorizontalWire.style.height = verticalWire.style.width = "3px";
        firstHorizontalWire.style.width = secondHorizontalWire.style.width = Math.abs(x1 - x2) / 2 + "px";
        verticalWire.style.height = Math.abs(y2-y1) + "px";
        }

        firstHorizontalWire.onmousedown = secondHorizontalWire.onmousedown = verticalWire.onmousedown = function(){

            if(confirm("Вы правда хотите удалить этот провод?")){

                firstHorizontalWire.remove();
                secondHorizontalWire.remove();
                verticalWire.remove();

            }

        }

    }

}
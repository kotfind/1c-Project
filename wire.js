class Wire{

    constructor (x1, y1, x2, y2, pp1, pp2){

        this.parentPoint1 = pp1;
        this.parentPoint2 = pp2;
        this.active = true;

        { //graphic part
        var firstHorizontalWire = this.firstHorizontalWire = document.createElement("img");
        var secondHorizontalWire = this.secondHorizontalWire = document.createElement("img");
        var verticalWire = this.verticalWire = document.createElement("img");

        document.getElementById("elementPanel").appendChild(firstHorizontalWire);
        document.getElementById("elementPanel").appendChild(secondHorizontalWire);
        document.getElementById("elementPanel").appendChild(verticalWire);

        firstHorizontalWire.src = "res/horizontalWire.png";
        secondHorizontalWire.src = "res/horizontalWire.png";
        verticalWire.src = "res/verticalWire.png";

        firstHorizontalWire.style.position = secondHorizontalWire.style.position = verticalWire.style.position = "absolute";
        
        firstHorizontalWire.style.top = (x1 < x2 ? y1 : y2) - 1 + "px";
        firstHorizontalWire.style.left = (x1 < x2 ? x1 : x2) + 1 + "px";

        secondHorizontalWire.style.top = (x1 > x2 ? y1 : y2) - 1 + "px";
        secondHorizontalWire.style.left = (x1 < x2 ? x1 : x2) + 1 + Math.abs(x1 - x2) / 2 + "px";

        verticalWire.style.top = (y1 < y2 ? y1 : y2) - 1 + "px";
        verticalWire.style.left = (x1 < x2 ? x1 : x2) + 1 + Math.abs(x1 - x2) / 2 + "px";

        firstHorizontalWire.style.height = secondHorizontalWire.style.height = verticalWire.style.width = "3px";
        firstHorizontalWire.style.width = secondHorizontalWire.style.width = Math.abs(x1 - x2) / 2 + "px";
        verticalWire.style.height = Math.abs(y2-y1) + 3 + "px";
        }

        firstHorizontalWire.onmousedown = secondHorizontalWire.onmousedown = verticalWire.onmousedown = function(){

            if(confirm("Вы правда хотите удалить этот провод?")){

                firstHorizontalWire.remove();
                secondHorizontalWire.remove();
                verticalWire.remove();

            }

        }

    }

    setCoordinats(x1, y1, x2, y2){
        
        this.firstHorizontalWire.style.top = (x1 < x2 ? y1 : y2) - 1 + "px";
        this.firstHorizontalWire.style.left = (x1 < x2 ? x1 : x2) + 1 + "px";

        this.secondHorizontalWire.style.top = (x1 > x2 ? y1 : y2) - 1 + "px";
        this.secondHorizontalWire.style.left = (x1 < x2 ? x1 : x2) + 1 + Math.abs(x1 - x2) / 2 + "px";

        this.verticalWire.style.top = (y1 < y2 ? y1 : y2) - 1 + "px";
        this.verticalWire.style.left = (x1 < x2 ? x1 : x2) + 1 + Math.abs(x1 - x2) / 2 + "px";

        this.firstHorizontalWire.style.width = this.secondHorizontalWire.style.width = Math.abs(x1 - x2) / 2 + "px";
        this.verticalWire.style.height = Math.abs(y2-y1) + 3 + "px";

    }

}
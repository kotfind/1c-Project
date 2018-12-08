class Wire{

    constructor (x1, y1, x2, y2, pp1, pp2){

        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.parentPoint1 = pp1;
        this.parentPoint2 = pp2;
        var this_ = this;
        this.modeIsHorizontal = false;
        this.number = wireNumber + 1;
        wireNumber++;

        { //graphic part
        var wire1 = this.wire1 = document.createElement("img");
        var wire2 = this.wire2 = document.createElement("img");
        var wire3 = this.wire3 = document.createElement("img");

        document.getElementById("elementPanel").appendChild(wire1);
        document.getElementById("elementPanel").appendChild(wire2);
        document.getElementById("elementPanel").appendChild(wire3);

        wire1.style.position = wire2.style.position = wire3.style.position = "absolute";

        this.editMode(this.modeIsHorizontal);

        }

        wire1.onmousedown = wire2.onmousedown = wire3.onmousedown = function(){

            if(confirm("Вы правда хотите удалить этот провод?")){

                this_.remove();

            }

        }

    }

    setCoordinats(x1, y1, x2, y2){
        
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        this.editMode(this.modeIsHorizontal);

    }

    editMode(ifModeIsHorizontal){

        var x1 = this.x1;
        var x2 = this.x2;
        var y1 = this.y1;
        var y2 = this.y2;

        if(ifModeIsHorizontal){

            this.wire1.src = "res/horizontalWire.png";
            this.wire2.src = "res/horizontalWire.png";
            this.wire3.src = "res/verticalWire.png";

            this.wire1.style.height = this.wire2.style.height = this.wire3.style.width = "3px";

            this.wire1.style.top = (x1 < x2 ? y1 : y2) - 1 + "px";
            this.wire1.style.left = (x1 < x2 ? x1 : x2) + 1 + "px";

            this.wire2.style.top = (x1 > x2 ? y1 : y2) - 1 + "px";
            this.wire2.style.left = (x1 < x2 ? x1 : x2) + 1 + Math.abs(x1 - x2) / 2 + "px";

            this.wire3.style.top = (y1 < y2 ? y1 : y2) - 1 + "px";
            this.wire3.style.left = (x1 < x2 ? x1 : x2) + 1 + Math.abs(x1 - x2) / 2 + "px";

            this.wire1.style.width = this.wire2.style.width = Math.abs(x1 - x2) / 2 + "px";
            this.wire3.style.height = Math.abs(y2-y1) + 3 + "px";

        }else{
            
            this.wire1.src = "res/verticalWire.png";
            this.wire2.src = "res/horizontalWire.png";
            this.wire3.src = "res/verticalWire.png";

            this.wire1.style.width = this.wire2.style.height = this.wire3.style.width = "3px";

            this.wire1.style.top = (y1 < y2 ? y1 : y2) + "px";
            this.wire1.style.left = (y1 < y2? x1 : x2) - 1 + "px";

            this.wire2.style.top = (y1 < y2 ? y1 : y2) + Math.abs(y1 - y2) / 2 + "px";
            this.wire2.style.left = (x1 < x2? x1 : x2) - 1 + "px";

            this.wire3.style.top = (y1 < y2 ? y2 : y1) - Math.abs(y1 - y2) / 2 + "px";
            this.wire3.style.left = (y1 < y2? x2 : x1) - 1 + "px";

            this.wire1.style.height = this.wire3.style.height = Math.abs(y1 - y2) / 2 + "px";
            this.wire2.style.width = Math.abs(x1 - x2) + 3 + "px";

        }

    }

    remove(){

        this.wire1.remove();
        this.wire2.remove();
        this.wire3.remove();

        for(var i = 0; i < this.parentPoint1.dependedWires.length; i++)
            if(this.parentPoint1.dependedWires[i].number == this.number)this.parentPoint1.dependedWires[i] = undefined;
        
        for(var i = 0; i < this.parentPoint2.dependedWires.length; i++)
            if(this.parentPoint2.dependedWires[i].number == this.number)this.parentPoint2.dependedWires[i] = undefined;


    }

}
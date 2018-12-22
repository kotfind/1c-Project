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
        this.firstWireLengthPer100 = 50;

        { //graphic part
        var wire1 = this.wire1 = document.createElement("span");
        var wire2 = this.wire2 = document.createElement("span");
        var wire3 = this.wire3 = document.createElement("span");

        wire1.className = wire2.className = wire3.className = "wire";

        this.color = [];

        wire1.style.backgroundColor = wire2.style.backgroundColor = wire3.style.backgroundColor = 
        "rgba(" + (this.color[0] = Math.round(Math.random()*220)) + ", " + (this.color[1] = Math.round(Math.random()*220)) + ", " + (this.color[2] = Math.round(Math.random()*220)) + ", 0.8)";

        document.getElementById("elementPanel").appendChild(wire1);
        document.getElementById("elementPanel").appendChild(wire2);
        document.getElementById("elementPanel").appendChild(wire3);

        wire1.style.position = wire2.style.position = wire3.style.position = "absolute";

        this.editMode(this.modeIsHorizontal);
        }

        wire1.onmousedown = wire2.onmousedown = wire3.onmousedown = function(e){

            e.stopPropagation();

            if(delMode){

                this_.remove();

            }else if(e.ctrlKey){
                this_.modeIsHorizontal = !this_.modeIsHorizontal;
                this_.editMode(this_.modeIsHorizontal);
                oneTimeStop = 1;
            }else{

                oneTimeStop = 1;
                selectedWire = this_;
                document.getElementById("wireSlider").value = this_.firstWireLengthPer100;
                document.getElementById("wireSlider").removeAttribute("disabled");
                document.getElementById("wireSlider").style.opacity = 1

                document.getElementById("propertiesPanel").style.opacity = 1;

                document.getElementById("wireColorField1").value = this_.color[0];
                document.getElementById("wireColorField2").value = this_.color[1];
                document.getElementById("wireColorField3").value = this_.color[2];
                document.getElementById("wireColorField1").style.opacity = 1;
                document.getElementById("wireColorField2").style.opacity = 1;
                document.getElementById("wireColorField3").style.opacity = 1;

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

            // this.wire1.src = "res/horizontalWire.png";
            // this.wire2.src = "res/horizontalWire.png";
            // this.wire3.src = "res/verticalWire.png";

            this.wire1.style.height = this.wire2.style.height = this.wire3.style.width = "3px";

            this.wire1.style.top = (x1 < x2 ? y1 : y2) - 1 + "px";
            this.wire1.style.left = (x1 < x2 ? x1 : x2) + 1 + "px";

            this.wire2.style.top = (x1 > x2 ? y1 : y2) - 1 + "px";
            this.wire2.style.left = (x1 < x2 ? x1 : x2) + 1 + Math.abs(x1 - x2) * this.firstWireLengthPer100 / 100.0 + "px";

            this.wire3.style.top = (y1 < y2 ? y1 : y2) - 1 + "px";
            this.wire3.style.left = (x1 < x2 ? x1 : x2) + Math.abs(x1 - x2) * this.firstWireLengthPer100 / 100.0 + "px";

            this.wire1.style.width = Math.abs(x1 - x2) * this.firstWireLengthPer100 / 100.0 + "px";
            this.wire2.style.width = Math.abs(x1 - x2) * (100 - this.firstWireLengthPer100) / 100.0 + "px";
            this.wire3.style.height = Math.abs(y2-y1) + 3 + "px";

        }else{
            
            // this.wire1.src = "res/verticalWire.png";
            // this.wire2.src = "res/horizontalWire.png";
            // this.wire3.src = "res/verticalWire.png";

            this.wire1.style.width = this.wire2.style.height = this.wire3.style.width = "3px";

            this.wire1.style.top = (y1 < y2 ? y1 : y2) + "px";
            this.wire1.style.left = (y1 < y2? x1 : x2) - 1 + "px";

            this.wire2.style.top = (y1 < y2 ? y1 : y2) + Math.abs(y1 - y2) * this.firstWireLengthPer100 / 100.0 + "px";
            this.wire2.style.left = (x1 < x2? x1 : x2) - 1 + "px";

            this.wire3.style.top = (y1 < y2 ? y2 : y1) - Math.abs(y1 - y2) * (100 - this.firstWireLengthPer100) / 100.0 + "px";
            this.wire3.style.left = (y1 < y2? x2 : x1) - 1 + "px";
            this.wire1.style.height = Math.abs(y1 - y2) * this.firstWireLengthPer100 / 100.0  + "px";
            this.wire3.style.height = Math.abs(y1 - y2) * (100 - this.firstWireLengthPer100) / 100.0 + "px";
            this.wire2.style.width = Math.abs(x1 - x2) + 3 + "px";

        }

    }

    remove(){

        this.wire1.remove();
        this.wire2.remove();
        this.wire3.remove();

        for(var i = 0; i < this.parentPoint1.dependedWires.length; i++)
            if(this.parentPoint1.dependedWires[i] != undefined && this.parentPoint1.dependedWires[i].number == this.number)
                this.parentPoint1.dependedWires[i] = undefined;
        
        for(var i = 0; i < this.parentPoint2.dependedWires.length; i++)
            if(this.parentPoint1.dependedWires[i] != undefined && this.parentPoint2.dependedWires[i].number == this.number)   
                this.parentPoint2.dependedWires[i] = undefined;


    }

}
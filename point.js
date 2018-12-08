class Point{

    constructor(x, y, parentElement){

        this.x = x;
        this.y = y;
        this.parentElement = parentElement;
        this.number = pointNumber + 1;
        pointNumber++;

        var this_ = this;

        var point = this.point = document.createElement("img");
        point.className = "point";

        document.getElementById("elementPanel").appendChild(point);

        point.style.position = "absolute";
        point.style.height = "14px";
        point.src = "res/pointOff.png";

        this.isOn = false;
        if(this.x != undefined) point.style.left = this.x - 7 + "px";
        if(this.y != undefined) point.style.top = this.y - 7 + "px";

        var dependedWires = this.dependedWires = [];

        point.onmousedown = function(){

            if(this_.isOn){

                console.log("b");
                point.src = "res/pointOff.png";
                this_.isOn = false;
                selectedPoint = undefined;

            }else{

                if(selectedPoint != undefined){

                    console.log("a");
                    dependedWires[dependedWires.length] = new Wire(selectedPoint.x + 7, selectedPoint.y + 7, this_.x + 7, this_.y + 7, this_, selectedPoint);
                    selectedPoint.dependedWires[selectedPoint.dependedWires.length] = dependedWires[dependedWires.length - 1];
                    selectedPoint.setIsOn(false);
                    selectedPoint = undefined;

                }else{

                    console.log("c");
                    console.log(this_);
                    point.src = "res/pointOn.png";
                    this_.isOn = true;
                    selectedPoint = this_;

                }

            }

        }

    }

    setCoordinats (new_X, new_Y){

        if(new_X != undefined) this.point.style.left = (this.x = new_X - 7) + "px";
        if(new_Y != undefined) this.point.style.top = (this.y = new_Y - 7) + "px";

        for(var i = 0; i < this.dependedWires.length; i++){
            if(this.dependedWires[i] != undefined)
                this.dependedWires[i].setCoordinats(this.x + 7, this.y + 7
                    ,this.dependedWires[i].parentPoint1.x != this.x ? this.dependedWires[i].parentPoint1.x + 7: this.dependedWires[i].parentPoint2.x + 7
                    ,this.dependedWires[i].parentPoint1.y != this.y ? this.dependedWires[i].parentPoint1.y + 7 : this.dependedWires[i].parentPoint2.y + 7);
        }

    }

    setIsOn(value){

        this.point.src = value ? "res/pointOn.png" : "res/pointOff.png";
        this.isOn = value;

    }

    removeAllWires(){

        for(var i = 0; i < this.dependedWires.length; i++){

            this.dependedWires[i].remove();

        }

    }

}

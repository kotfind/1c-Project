class Point{

    constructor(x, y, parentElement, inElementNumber){

        this.x = x;
        this.y = y;
        this.parentElement = parentElement;
        this.number = pointNumber + 1;
        pointNumber++;
        var inElementNumber = this.inElementNumber = inElementNumber + 1;

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


            // for (var i = 0; i < parentElement.points.length; i++) 
            //     if(parentElement.points[i].number==this_.number){
            //         console.log(i + 1);
            //         break
            //     }

            if(!delMode)
                if(this_.isOn){

                    point.src = "res/pointOff.png";
                    this_.isOn = false;
                    selectedPoint = undefined;

                }else{

                    if(selectedPoint != undefined){

                        var canAddNewWire = true;

                        for(var i = 0; i < selectedPoint.dependedWires.length; i++){
                            if(selectedPoint.dependedWires[i] != undefined && selectedPoint.dependedWires[i].parentPoint1.number == this_.number || selectedPoint.dependedWires[i] != undefined && selectedPoint.dependedWires[i].parentPoint2.number == this_.number){
                                canAddNewWire = false;
                                break;
                            }
                        }

                        if(canAddNewWire && selectedPoint.parentElement.number != this_.parentElement.number){
                            dependedWires[dependedWires.length] = new Wire(selectedPoint.x + 7, selectedPoint.y + 7, this_.x + 7, this_.y + 7, selectedPoint, this_);
                            selectedPoint.dependedWires[selectedPoint.dependedWires.length] = dependedWires[dependedWires.length - 1];
                        }else if(!canAddNewWire) alert("Провод соединяющий эти точки уже существует.");
                        else alert("Нельзя соединять элимент с самим собой.");
                        selectedPoint.setIsOn(false);
                        selectedPoint = undefined;

                    }else{

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

            if(this.dependedWires[i] != undefined)this.dependedWires[i].remove();

        }

    }

}

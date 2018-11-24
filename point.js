class Point{

    constructor(x, y){

        this.x = x;
        this.y = y;

        var this_ = this;

        var point = this.point = document.createElement("img");

        document.getElementById("elementPanel").appendChild(point);

        point.style.position = "absolute";
        point.style.height = "14px";
        point.src = "res/pointOff.png";

        this.isOn = false;
        if(x != undefined) point.style.left = x - 7 + "px";
        if(y != undefined) point.style.top = y - 7 + "px";

        point.onmousedown = function(){

            if(this.isOn){

                point.src = "res/pointOff.png";
                this.isOn = false;
                selectedPoint = undefined;

            }else{

                if(selectedPoint != undefined){

                    new Wire(selectedPoint.x, selectedPoint.y, this_.x, this_.y);
                    selectedPoint.setIsOn(false);
                    selectedPoint = undefined;

                }else{

                    point.src = "res/pointOn.png";
                    this.isOn = true;
                    selectedPoint = this_;
                    //console.log(selectedPoint);

                }

            }

        }

    }

    setCoordinats (new_X, new_Y){

        if(new_X != undefined) this.x = this.point.style.left = new_X - 7 + "px";
        if(new_Y != undefined) this.y = this.point.style.top = new_Y - 7 + "px";

    }

    setIsOn(value){

        this.point.src = value ? "res/pointOn.png" : "res/pointOff.png";
        this.isOn = value;

    }

}

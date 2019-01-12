class Element {

    constructor(elementClass, height, adder, img, parent, pointsX, pointsY, type){

        var elem = document.createElement("img");
        this.elem = elem;
        this.img = img;
        this.type = type;
        //if(title != "" && title != undefined)elem.title = title;
        parent = parent==undefined? document.getElementById("objectsSpan"):parent;

        elem.src = this.img;
        elem.height = height;
        elem.className = "element";
        parent.insertBefore(elem, parent.children[0]);
        var this_ = this;
        var onpanel = adder;
        this.number = elementNumber + 1;
        elementNumber++;

        var points = this.points = [];

        elem.onmousedown = function(e) {

            if(delMode){

                if(!adder)this_.removeThis();
                else alert("У вас включен режим удаления элементов. В этом режиме создание новых элементов невозможно");

            }else{

                elem.style.position = "absolute";
                elem.style.margin = "auto";

                var coords = getCoords(elem);
                var shiftX = e.pageX - coords.left;
                var shiftY = e.pageY - coords.top;

                if(onpanel){
                    onpanel = false;
                    shiftY += document.getElementById("elementPanel").scrollTop;
                }

                elem.style.position = "absolute";
                parent.insertBefore(elem, parent.children[0]);
                moveAt(e);

                elem.style.zIndex = 100;

                function moveAt(e) {

                    this_.onMove();

                    if(!e.ctrlKey) {

                        elem.style.left = e.pageX - shiftX + 'px';
                        elem.style.top = e.pageY - shiftY + 'px';

                        for (var i = 0; i < points.length; i++) {
                            points[i].setCoordinats(e.pageX - shiftX + pointsX[i], e.pageY - shiftY + pointsY[i]);
                        }
                        
                    }
                }

                document.onmousemove = function(e) {
                    moveAt(e);
                };
            }
        };
        elem.ondragstart = function() {
            return false;
        };

        function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };
        };
        elem.onmouseup = function(e){

            if(adder && !delMode){

                new elementClass(true, parent);

                adder = false;
                this_.becomeNotAdder();

                for(var i = 0; i < pointsX.length; i++){
                    points[points.length] = new Point(0, 0, this_, i);
                }

                var coords = getCoords(elem);
                var shiftX = e.pageX - coords.left;
                var shiftY = e.pageY - coords.top;

                for (var i = 0; i < points.length; i++) {
                    points[i].setCoordinats(e.pageX - shiftX + pointsX[i], e.pageY - shiftY + pointsY[i]);
                }

            }
            if(!adder)if(parseInt(this.style.left.split("px")[0], 10) <= 160){

                this_.removeThis();

            }

            document.onmousemove = null;

        };
    }

    set icon(value){

        this.elem.img = value;
        this.elem.src = value;

    }

    removeThis(){

        for (var i = 0; i < this.points.length; i++){

            this.points[i].removeAllWires();
            this.points[i].point.remove();

        }
        this.elem.remove();
        this.onDel();

    }

    onMove(){}
    onDel(){}
    becomeNotAdder(){}
}

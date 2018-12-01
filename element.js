class Element {

    constructor(elementClass, height, adder, img, parent, pointsX, pointsY){

        var elem = document.createElement("img");
        this.elem = elem;
        this.img = img;
        //if(title != "" && title != undefined)elem.title = title;
        parent = parent==undefined? document.getElementById("objectsSpan"):parent;

        elem.src = this.img;
        elem.height = height;
        elem.className = "element";
        elem.zIndex = 10;
        parent.insertBefore(elem, parent.children[0]);

        var points = [];

        elem.onmousedown = function(e) {

            elem.style.position = "absolute";
            elem.style.margin = "auto";

            var coords = getCoords(elem);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            elem.style.position = "absolute";
            parent.insertBefore(elem, parent.children[0]);
            moveAt(e);

            elem.style.zIndex = 100;

            function moveAt(e) {

                elem.style.left = e.pageX - shiftX + 'px';
                elem.style.top = e.pageY - shiftY + 'px';

                for (var i = 0; i < points.length; i++) {
                    points[i].setCoordinats(e.pageX - shiftX + pointsX[i], e.pageY - shiftY + pointsY[i]);
                }

            }

            document.onmousemove = function(e) {
                moveAt(e);
            };
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

            if(adder){

                new elementClass(true, parent);

                adder = false;

                for(var i = 0; i < pointsX.length; i++){
                    points[points.length] = new Point(0, 0);
                }

                var coords = getCoords(elem);
                var shiftX = e.pageX - coords.left;
                var shiftY = e.pageY - coords.top;

                for (var i = 0; i < points.length; i++) {
                    points[i].setCoordinats(e.pageX - shiftX + pointsX[i], e.pageY - shiftY + pointsY[i]);
                }

            }
            if(!adder)if(parseInt(this.style.left.split("px")[0], 10) <= 160){

                for (var i = 0; i < points.length; i++) points[i].point.remove();
                this.remove();

            }

            document.onmousemove = null;

        };
    }

    set icon(value){

        this.elem.img = value;
        this.elem.src = value;

    }
}

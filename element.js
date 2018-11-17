class Element {

    constructor(elementClass, height, adder, img, parent, title){

        var elem = document.createElement("img");
        this.elem = elem;
        this.img = img;
        if(title != "" && title != undefined)elem.title = title;
        parent = parent==undefined? document.getElementById("objectsSpan"):parent;

        elem.src = this.img;
        elem.height = height;
        elem.className = "element";
        parent.insertBefore(elem, parent.children[0]);

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

            }
            if(!adder)if(parseInt(this.style.left.split("px")[0], 10) <= 160)this.remove();

            document.onmousemove = null;

        };
    }

    set icon(value){

        this.elem.img = value;
        this.elem.src = value;

    }
}

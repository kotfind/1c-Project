class Element {

    constructor(img, parent){

        var elem = document.createElement("img");
        this.elem = elem;
        this.img = img;

        elem.src = this.img;
        elem.className = "element";
        idCounter++;
        elem.id = idCounter;
        if(parent == undefined)
            document.getElementById("objectsSpan").insertBefore(elem, 
                document.getElementById("objectsSpan").children[0]);
        else
            parent.insertBefore(elem, 
                parent.children[0]);

        elem.onmousedown = function(e) {

            elem.style.position = "absolute";
            elem.style.margin = "auto";

            var coords = getCoords(elem);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            elem.style.position = "absolute";
            if(parent == undefined)
                document.getElementById("objectsSpan").insertBefore(elem
                    ,document.getElementById("objectsSpan").children[0]);
             else
                parent.insertBefore(elem
                    ,parent.children[0]);
            moveAt(e);

            elem.style.zIndex = 100; // над другими элементами

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
    }

    set icon(value){

        this.elem.img = value;
        this.elem.src = value;

    }
}

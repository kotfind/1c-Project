class Element {

    constructor(img){

        this.img = img;
        this.pins = [];

        var elem = document.createElement("img");
        this.elem = elem;

        elem.src = this.img;
        //elem.className = "element " + this.type_;
        this.elem.id = "element" + document.getElementById("objectsSpan").children.length;
        document.getElementById("objectsSpan").appendChild(elem);

        elem.onmousedown = function(e) {

            var coords = getCoords(elem);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            elem.style.position = 'absolute';
            document.body.appendChild(elem);
            moveAt(e);

            elem.style.zIndex = 1000; // над другими элементами

            function moveAt(e) {
                elem.style.left = e.pageX - shiftX + 'px';
                elem.style.top = e.pageY - shiftY + 'px';
            }

            document.onmousemove = function(e) {
                moveAt(e);
            };

            elem.onmouseup = function() {
                document.onmousemove = null;
                elem.onmouseup = null;
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
    // set type(value){

    //     this.type_ = value;
    //     this.elem.className = "element " + value;

    // }

}
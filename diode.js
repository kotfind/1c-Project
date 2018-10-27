class Diode extends Element{

    constructor(adder, xPos, yPos){

        super("res/diode.png", adder, xPos, yPos);

        elem = this.elem;

        elem.width = 100;
        elem.height = 40;

        if(adder){
            elem.onmousedown = function(e){
                
                var coords = getCoords(this);
                var shiftX = e.pageX - coords.left;
                var shiftY = e.pageY - coords.top;

                var elem = new Diode(false, shiftX, shiftY);

            };
        }

        function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };
        };

    }

}

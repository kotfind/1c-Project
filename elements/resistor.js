class Resistor extends Element{

    constructor(adder, parent){

        super(Resistor, 40, adder, "res/resistor.png", parent);

        // var elem = this.elem;

        // elem.height = 40;

        // elem.onmouseup = function(e){

        //     if(adder){

        //         new Resistor(true, parent);

        //         adder = false;

        //     }
        //     if(!adder)if(parseInt(this.style.left.split("px")[0], 10) <= 160)this.remove();

        //     document.onmousemove = null;

        // };

    }

}

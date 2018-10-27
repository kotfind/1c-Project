class Diode extends Element{

    constructor(adder){

        super("res/diode.png", adder);

        elem = this.elem;

        this.elem.width = 100;
        this.elem.height = 40;

        if(adder){
            this.elem.onmousedown = function(e){

                new Diode(false);

            };
        }

    }

}

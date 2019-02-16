class Transistor extends Element{

    constructor(adder, parent){

        super(Transistor, 97, adder, "res/elements/transistor.png", parent, [54, 1, 54], [-1, 48.5, 98], "transistor"); 

        this.maxAmperage = 0.6;
        this.openValue = 0;
        this.nowAmperage = 0;

    }

}

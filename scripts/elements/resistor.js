class Resistor extends Element{

    constructor(adder, parent){

        super(Resistor, 40, adder, "res/elements/resistor.png", parent, [1, 99], [20, 20], "resistor"); 

        this.resistance = 300;

    }

}

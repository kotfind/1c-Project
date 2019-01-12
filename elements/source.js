class Source extends Element{

    constructor(adder, parent){

        super(Source, 40, adder, "res/elements/source.png", parent, [99, 1], [20, 20], "source");

        this.becomeNotAdder = function(){

            sourceArray[sourceArray.length] = this;

        }

    }    

}

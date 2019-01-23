class Source extends Element{

    constructor(adder, parent){

        super(Source, 40, adder, "res/elements/source.png", parent, [1, 99], [20, 20], "source");

        this.onBecomeNotAdder = function(){

            sourceArray[sourceArray.length] = this;

        }
        this.onDel = function(){

            for(var i = 0; i < sourceArray.length; i++){

                if(sourceArray[i] != undefined)
                    if(sourceArray[i].number == this.number)
                        sourceArray[i] = undefined;

            }

        }

    }    

}

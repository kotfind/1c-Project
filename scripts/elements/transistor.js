class Transistor extends Element{

    constructor(adder, parent){

        super(Transistor, 97, adder, "res/elements/transistor.png", parent, [54, 1, 54], [-1, 48.5, 98], "transistor"); 

        this.maxAmperage = 0.6;
        this.openValue = 0;
        this.nowAmperage = 0;

        this.recountOpenValue = function(){

            var smthBurned = false;
            var smthChanged = false;

            if(this.nowAmperage > this.maxAmperage){

                smthBurned = true;
                this.openValue = 0;

            }else{

                if(this.openValue != this.nowAmperage / this.maxAmperage){
                    
                    this.openValue = this.nowAmperage / this.maxAmperage;
                    smthChanged = true;

                }

            }

            return {"smthBurned": smthBurned, "smthChanged": smthChanged};

        }

    }

}

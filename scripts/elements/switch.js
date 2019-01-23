class Switch extends Element{

    constructor(adder, parent){

        super(Switch, 40, adder, "res/elements/switchOff.png", parent, [1, 99], [20, 20], "switch");

        this.isOn = false;

        this.onClick = function (e){

            if(e.ctrlKey){
                
                this.isOn = !this.isOn;
                if(this.isOn) this.elem.src = "res/elements/switchOn.png";
                else this.elem.src = "res/elements/switchOff.png";

            }

        }

    }

}

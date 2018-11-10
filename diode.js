class Diode extends Element{

    constructor(adder, parent){

        super("res/diode.png", parent);

        var elem = this.elem;
        //parent = elem.parentElement;

        elem.width = 100;
        elem.height = 40;

        elem.onmouseup = function(e){

            if(adder){

                new Diode(true, parent);
                // var oldThis = this;
                // document.getElementById("objectsSpan").appendChild(this);
                // document.getElementById("elementPanel").removeChild(oldThis);

                adder = false;

            }
            if(!adder)if(parseInt(this.style.left.split("px")[0], 10) <= 160)this.remove();

            document.onmousemove = null;

        };

    }

}

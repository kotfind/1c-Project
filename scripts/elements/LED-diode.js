class LED_Diode extends Element{

    constructor(adder, parent){

        super(LED_Diode, 40, adder, "res/elements/LED-diode.png", parent, [1, 99], [20, 20], "led-diode");

        // var oldNowAmperage;
        this.nowAmperage = 0;
        this.maxAmperage = 0.03;
        this.lightLevel = 0;

        var lightSpan = this.lightSpan = document.createElement("span");
        lightSpan.style.position = "absolute";
        lightSpan.style.zIndex = 0;
        lightSpan.style.backgroundColor = "red";
        lightSpan.style.width = "100%";
        lightSpan.style.height = "100%";
        lightSpan.style.left = 0;
        lightSpan.style.top = 0;
        lightSpan.style.opacity = 0;
        var left = this.elem.getBoundingClientRect().left;
        var top = this.elem.getBoundingClientRect().top;
        lightSpan.style.clipPath = "polygon(" + (left + 36) + "px "+ (top + 0) +"px, " + (left + 64) + "px " + (top + 20) + "px, " + (left + 36) + "px " + (top + 40) + "px)";

        this.elem.parentNode.appendChild(lightSpan);

        this.onMove = function(){
            
            left = this.elem.getBoundingClientRect().left;
            top = this.elem.getBoundingClientRect().top;
            lightSpan.style.clipPath = "polygon(" + (left + 36) + "px "+ (top + 0) +"px, " + (left + 64) + "px " + (top + 20) + "px, " + (left + 36) + "px " + (top + 40) + "px)";

        }

        this.onDel = function(){

            lightSpan.remove();

        }

        this.recountLightLevel = function(){

            var smthBurned = false;
            var smthChanged = false;

            if(this.nowAmperage > this.maxAmperage){

                this.lightLevel = 0;
                lightSpan.style.opacity = this.lightLevel;
                smthBurned = true;

            }else{

                if(this.lightLevel != this.nowAmperage / this.maxAmperage){
                    
                    this.lightLevel = this.nowAmperage / this.maxAmperage;
                    lightSpan.style.opacity = this.lightLevel;
                    smthChanged = true;

                }

            }

            return {"smthBurned": smthBurned, "smthChanged": smthChanged};

        }

    }



}

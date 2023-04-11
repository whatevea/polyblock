import enableDrag from "../helpers/funcs.js";

export class Striker1 {
    constructor(scene){
        this.scene=scene;
        this.sprite= scene.add.sprite(614,1193,"allsprites").setFrame(7);                
    }
}

export class Battery{
    constructor(scene){
        this.scene=scene;
        this.sprite=scene.add.sprite(65,1183,"battery").setScale(0.58);
        this.numSprite = this.scene.add.text(120,1197 ,"0", { fontFamily: "Inconsolata", fontSize: "70px" })
        this.fillValue=0;
        this.filledValue=0;

    }

    fill(){
        this.fillValue++;
        console.log(this.fillValue);
        if(this.fillValue===6){
            this.filledValue++;
            this.numSprite.text=this.filledValue;
            this.fillValue=0;
            this.sprite.setFrame(0);
            this.scene.emitter.emit("slotFilled",this.filledValue)
        }
        else{
            this.sprite.setFrame(this.fillValue)
        }



    }
    startFilling(){
        this.fillTimer=this.scene.time.addEvent({
            delay:4000,
            callback:()=>{
                this.fill()
            },
            loop:true
        })
    }

    stopFilling(){

    }
} 
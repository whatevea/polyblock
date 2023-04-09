import initLevel from "../handlers/LevelHandler.js";
import data from "../helpers/data.js";
import enableDrag from "../helpers/funcs.js";
import Bullet from "../objects/bullet.js";
import SpaceShip from "../objects/spaceship.js";

export default class GamePlayScene extends Phaser.Scene{
constructor(){
    super({key:"GamePlayScene"})
}

init(data){
this.LevelNumber=data.Level;
}

create(){
this.emitter= new Phaser.Events.EventEmitter();
const backgroundImage=this.add.image(0,0,"bg2").setOrigin(0,0);
const spaceship= new SpaceShip(this);
spaceship.move()

const fireBtn=this.add.sprite(100,400,"allsprites").setFrame(9)

fireBtn.setInteractive();
fireBtn.on("pointerdown",()=>{
    spaceship.fire();
})
this.bulletGroup=this.add.group();
this.boxGroup = this.add.group();
this.physics.add.overlap(this.bulletGroup,this.boxGroup,(a,b)=>{
   this.emitter.emit("bulletAndBox",a,b)
})
initLevel(this,this.LevelNumber);
this.fontConfig={fontFamily:"Inconsolata",fontSize:"47px"}

}
update(){
this.bulletGroup.getChildren().forEach((child)=>{
    if(child.y<=-10){
        
        child.destroy()
        console.log("child destroyed")
    }
})



}


}
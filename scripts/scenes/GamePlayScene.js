import data from "../helpers/data.js";
import enableDrag from "../helpers/funcs.js";
import SpaceShip from "../objects/spaceship.js";

export default class GamePlayScene extends Phaser.Scene{
constructor(){
    super({key:"GamePlayScene"})
}

init(data){
this.Level=data.Level;
}

create(){
const backgroundImage=this.add.image(0,0,"bg2").setOrigin(0,0);
const spaceship= new SpaceShip(this);
spaceship.move()
const box= this.add.sprite(100,100,"sprites").play("shake")
const fireBtn=this.add.sprite(100,400,"sprites").setFrame(6
    );
fireBtn.setInteractive();
fireBtn.on("pointerdown",()=>{
    spaceship.fire();
})
enableDrag(box)


}
update(){

}


}
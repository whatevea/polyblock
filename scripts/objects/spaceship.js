import Bullet from "./bullet.js";

export default class SpaceShip{
    constructor(scene){
        this.scene=scene;
        this.sprite=scene.add.sprite(68,1123,"spaceship").setScale(2);
    };



fire(){
const {x,y}=this.sprite.getCenter();
new Bullet(this.scene,x,y).move();


}
move(){

    this.moveAnimation=this.scene.tweens.add({
        targets:this.sprite,
        x:644,
        duration:7000,
        ease:"linear",
        yoyo:true,
        repeat:-1
    })

}
thrust(){

this.sprite.play("thrust")

}



}
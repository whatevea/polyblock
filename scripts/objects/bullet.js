export default class Bullet{

    constructor(scene,x,y){
        this.scene=scene;
        this.speed=80;
        this.sprite=scene.add.sprite(x,y,"allsprites").setFrame(11).setScale(0.2);
    }

    move(){
        this.sprite.setVelocity(-80);
    }
}
import Bullet from "./bullet.js";

export default class SpaceShip{
    constructor(scene){
        this.scene=scene;
        this.blueparticles=scene.add.particles("blueParticle");
        this.sprite=scene.add.sprite(68,1029,"spaceship").setScale(2);
    };



startFire(){
this.fireTimer= this.scene.time.addEvent({
    delay:600,
    callback:()=>{
        const { x, y } = this.sprite.getCenter();
        new Bullet(this.scene, x, y).move();

    },
    loop:true
})

}
stopFire(){
this.fireTimer.remove();

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

emitParticle(){
    this.blueParticleEmitter=this.blueparticles.createEmitter({
        moveToX: 85,
        moveToY: 1110,
        frequency:240,
        blendMode: 'ADD',
        scale: { start: 0.4, end: 0 },
        speedX: { start: 100, end: 400, steps: 12 },
        speedY: { min: -20, max: 20 },
        angle: { min: 10, max: 180 },
        follow:this.sprite
    })
}



}
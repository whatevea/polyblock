export default class Bullet{

    constructor(scene,x,y){
        this.scene=scene;
        this.speed=80;
        this.sprite=scene.physics.add.sprite(x,y,"allsprites").setFrame(11).setScale(0.2);
        scene.bulletGroup.add(this.sprite);
        this.setEventListener();
    }
    setEventListener() {
        this.scene.emitter.on("bulletAndBox", (bullet,box) => {
            if(bullet===this.sprite){
                this.blast();
                this.scene.bulletGroup.remove(this.sprite);
            }
        })
    }

    move(){
        this.sprite.setVelocityY(-440);
        this.sprite.setAngularVelocity(230);
    }
    blast(){
        console.log("From bullet")
        this.sprite.destroy();
    }
}



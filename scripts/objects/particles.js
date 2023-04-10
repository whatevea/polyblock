export default class Particle {
    constructor(scene){
        this.scene=scene;
        this.boxParticles = this.scene.add.particles("boxParticle")
        
    }
    renderBoxParticles(x,y){
           const emitter=this.boxParticles.createEmitter({
            x:x,
            y:y,
            lifespan:200,
            maxParticles:4,
            gravityY:1000,
            scale:{start:0.2,end:0},
            speed:{min:300,max:600}
        })
    }
}

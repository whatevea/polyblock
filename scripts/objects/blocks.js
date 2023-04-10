export default class Blocks{

    constructor(scene,x,y,num)
    
    {
        this.scene=scene;
        this.x=x;
        this.y=y;
        this.num=num;
        this.sprite=scene.physics.add.sprite(x,y,"allsprites").setOrigin(0,0).setScale(0.7);
        this.sprite.body.setSize(this.sprite.width-30,this.sprite.height-35)
        this.numSprite=scene.add.text(x+20,y+20,num,{fontFamily:"Inconsolata",fontSize:"47px"})
        this.setEventListener();
        this.playingAnim1=false;
        this.playingAnim2= false;

    }
    setEventListener(){
        this.scene.emitter.on("bulletAndBox",(bullet,box)=>{
            if(this.sprite===box){
                this.reduce()
            }
        }
        )
    }

    reduce()
    {
    if(this.num===1){
        this.blast()
    }
    else {
    this.shake();
    this.num--;
    this.numSprite.text=this.num;
    }  
}


    shake()
    {
    if(!this. playingAnim1 && !this.playingAnim2)
    {
        this.playingAnim2 = true;    

            this.playingAnim1 = true;

        this.playingAnim=true;
        let boxShake=this.scene.tweens.add({
            targets:this.sprite,
            x:this.x+5,
            y:this.y+5,
            duration:50,
            ease:"Linear",
            yoyo:true,
            repeat:1,
            onComplete: ()=>{
                this.playingAnim1=false;
            }  
        })
    let numShake=this.scene.tweens.add({
        targets:this.numSprite,
        x:this.x+5,
        y:this.y+5,
        duration:50,
        ease:"Linear",
        yoyo:true,
        repeat:1,
        onComplete:()=>{
            this.playingAnim2=false;
        }
    })

    }}

    blast(){
        this.numSprite.destroy();
        this.sprite.destroy();
        this.scene.particlesEmitter.renderBoxParticles(this.x,this.y)
    }

}
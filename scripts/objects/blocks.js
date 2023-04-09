export default class Blocks{

    constructor(scene,x,y,num){
        this.scene=scene;
        this.x=x;
        this.y=y;
        this.num=num;
        this.sprite=scene.add.sprite(x,y,"allsprites").setOrigin(0,0).setScale(0.7);
        
        this.numSprite=scene.add.text(x+20,y+20,num,{fontFamily:"Inconsolata",fontSize:"47px"})

    }

    reduce()
    {
    this.shake();
    this.num--;
    this.numSprite.text=this.num;
   
}


    shake(){
        let boxShake=this.scene.tweens.add({
            targets:this.sprite,
            x:this.x+5,
            y:this.y+5,
            duration:50,
            ease:"Linear",
            yoyo:true,
            repeat:1,
        })
    let numShake=this.scene.tweens.add({
        targets:this.numSprite,
        x:this.x+5,
        y:this.y+5,
        duration:50,
        ease:"Linear",
        yoyo:true,
        repeat:1
    })

    }

    destroy(){
        this.numSprite.destroy();
    }

}
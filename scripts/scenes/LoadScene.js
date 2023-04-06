import enableDrag from "../helpers/funcs.js";

export default class LoadScene extends Phaser.Scene{
constructor(){
    super({key:"LoadScene"})
}
preload(){
    this.load.audio("hit","assets/hit.wav");
    this.load.audio("rise","assets/rise.wav");

this.load.image("mountain","/assets/image.png");
this.load.image("bg","/assets/bg.png")
this.load.spritesheet("slots","/assets/125whack.png",{
    frameWidth:125,
    frameHeight:125
})

}
create(){

    //phaser animation simple code
    this.anims.create({

        key:"died",

        frames:this.anims.generateFrameNumbers('slots',{frames:[1,2,4,5]}),

        frameRate:11,

        repeat:0



    });

 //code here

// let bg=this.add.image(16.371268400541396 ,-211.6354300385109,"bg").setOrigin(0,0).setScale(0.7)
let mytext= this.add.text(197,340,"LOADING.....",{fontSize:"52px"})
let mytext2= this.add.text(63,794,"Game by Sandiph (sandiph.itch.io)",{fontSize:"32px"})
enableDrag(mytext)
enableDrag(mytext2)

setTimeout(() => {
    this.cameras.main.fadeOut(1000);
    this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.start("MainMenu");
    });
  }, 1200);


}
update(){
}


}
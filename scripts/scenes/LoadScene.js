import enableDrag from "../helpers/funcs.js";

export default class LoadScene extends Phaser.Scene{
constructor(){
    super({key:"LoadScene"})
}
preload(){

    this.load.image("bg","../assets/bg.png")
    this.load.image("bg2","../assets/bg2.png")

    this.load.image("playBtn","../assets/playbtn.png")
this.load.spritesheet("onoff","../assets/onoff.png",{
    frameWidth:266,
    frameHeight:249
})
this.load.spritesheet("allsprites","../assets/spritesaligned.png",{
    frameWidth:165,
    frameHeight:169
});
this.load.spritesheet("spaceship","../assets/spaceship.png",{
frameHeight:84,
frameWidth:93
})


this.load.image("settings","../assets/settings.png")




}
create(){

    //phaser animation simple code
this.anims.create({
    key:"shake",
    frames:this.anims.generateFrameNumbers("sprites",{frames:[4,1,2,3,5]}),
frameRate:4,
repeat:-1
});


this.anims.create({

    key:"thrust",
    frames:this.anims.generateFrameNumbers("spaceship",{frames:[1,2,3,4,5]}),
    frameRate:10,
    repeat:-1
})



 //code here
 this.add.text(197,340,"LOADING.....",{fontSize:"52px"})
 this.add.text(63,794,"Game by Sandiph (sandiph.itch.io)",{fontSize:"32px"})

setTimeout(() => {
    this.cameras.main.fadeOut(1000);
    this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.start("MainMenu");
    });
  }, 0);


}
update(){
}


}
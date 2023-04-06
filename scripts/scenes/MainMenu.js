import data from "../helpers/data.js";
import enableDrag from "../helpers/funcs.js";

export default class MainMenu extends Phaser.Scene{
constructor(){
    super({key:"MainMenu"})
}
preload(){
    this.load.image("bg","../assets/bg.png")
    this.load.image("playBtn","../assets/playbtn.png")
this.load.spritesheet("onoff","../assets/onoff.png",{
    frameWidth:266,
    frameHeight:249
})
this.load.image("settings","../assets/settings.png")

    

}
create(){
let bg=this.add.image(16.371268400541396 ,-211.6354300385109,"bg").setOrigin(0,0).setScale(0.7);
let playBtn=this.add.image(379, 458,"playBtn")
let settingsBtn=this.add.image(133,100,"settings").setScale(0.4)
let musicBtn=this.add.sprite(59,56,"onoff").setFrame(data.buttons.music.on).setScale(0.4);
let soundBtn=this.add.sprite(656,65,"onoff").setFrame(data.buttons.sound.on).setScale(0.4)

enableDrag(settingsBtn)
enableDrag(musicBtn)
enableDrag(soundBtn)





}
update(){

}


}
import enableDrag from "../helpers/funcs.js";

export default class LoadScene extends Phaser.Scene{
constructor(){
    super({key:"LoadScene"})
}
preload(){

this.load.image("bg","../assets/bg.png")
this.load.image("playBtn","../assets/playbtn.png")
this.load.image("settings","../assets/setttings.png")



}
create(){

    //phaser animation simple code


 //code here
 this.add.text(197,340,"LOADING.....",{fontSize:"52px"})
 this.add.text(63,794,"Game by Sandiph (sandiph.itch.io)",{fontSize:"32px"})

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
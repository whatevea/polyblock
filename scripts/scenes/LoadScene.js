import enableDrag from "../helpers/funcs.js";

export default class LoadScene extends Phaser.Scene{
constructor(){
    super(sceneConfig)
}
preload(){
    this.plugins.get('rexwebfontloaderplugin').addToScene(this);

        var config = {
            google: {
                families: ['Inconsolata']
            }
        };
        this.load.rexWebFont(config);
    this.load.image("bg","../assets/bg.png")
    this.load.image("bg2","../assets/bg2.png")
this.load.image("boxParticle","../assets/particle.png")
this.load.image("blueParticle","../assets/blueparticle.png")
    this.load.image("playBtn","../assets/playbtn.png")
    this.load.spritesheet("battery","../assets/battery.png",{
        frameHeight:308,
        frameWidth:165
    })
this.load.spritesheet("onoff","../assets/onoff.png",{
    frameWidth:266,
    frameHeight:249
})
this.load.spritesheet("allsprites","../assets/spritesaligned.png",{
    frameWidth:165,
    frameHeight:168.5
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

    key:"thrust",
    frames:this.anims.generateFrameNumbers("spaceship",{frames:[1,2,3,4,5]}),
    frameRate:10,
    repeat:-1
})



 //code here
 this.add.text(197,340,"LOADING.....",{fontSize:"52px"})
 this.add.text(63,794,"Game by Sandiph (sandiph.itch.io)",{fontSize:"32px"})

 this.scene.start("MainMenu");
// setTimeout(() => {
//     this.cameras.main.fadeOut(1000);
//     this.cameras.main.once('camerafadeoutcomplete', () => {
//         this.scene.start("MainMenu");
//     });
//   }, 0);


}
update(){
}


}
var sceneConfig = {
    key: 'LoadScene',
    pack: {
        files: [{
            type: 'plugin',
            key: 'rexwebfontloaderplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexwebfontloaderplugin.min.js',
            start: true
        }]
    }
};


import LoadScene from "./scenes/LoadScene";

const gameConfig = {
  width: 1200,
  height: 800,
  type: Phaser.AUTO,
  scale:{mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH},
  
  scene : [LoadScene]}
export default gameConfig;


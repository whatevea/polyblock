import LoadScene from "./scenes/LoadScene.js";
import MainMenu from "./scenes/MainMenu.js";

const gameConfig = {
  type: Phaser.AUTO,
  width: 720,
  height: 1280,
  parent: 'game-container',
  scale: {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
  default: 'arcade',
  arcade: {
  debug: true
  }
  },
scene:[MainMenu]
}
export default gameConfig;


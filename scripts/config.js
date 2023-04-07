import LoadScene from "./scenes/LoadScene.js";
import MainMenu from "./scenes/MainMenu.js";
import GamePlayScene from "./scenes/GamePlayScene.js";
import LevelSelectScene from "./scenes/LevelSelectScene.js";
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
scene:[LoadScene,MainMenu,GamePlayScene,LevelSelectScene]
}
export default gameConfig;


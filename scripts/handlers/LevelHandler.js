import data from "../helpers/data.js";
import levelData from "../helpers/levels.js";
import Blocks from "../objects/blocks.js";

export default function initLevel(scene,levelNum)
{
const level_json=levelData[levelNum];
let wave=1;
initWave(scene,level_json)
}




 function initWave(scene,data)

{
    let pos={x:0,y:120,size:116}
    for(let i=0;i<=data.blocksPerWave;i++){
        let eachBlock=new Blocks(scene,pos.x,pos.y,Phaser.Math.Between(data.minBlock,data.maxBlock) )
        scene.boxGroup.add(eachBlock.sprite);
        pos.x+=pos.size;
        if(pos.x>=6*pos.size){
            pos.x=0;
            pos.y-=118;
        }
    }


}
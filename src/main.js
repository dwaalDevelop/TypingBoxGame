import Phaser from 'phaser'

import Scene_Title from './scenes/scene_title'
import Scene_Game from './scenes/Scene_Game'
import Scene_Test from './scenes/Scene_Test'

import { viewport_h, viewport_w} from './globals.js';

/*
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Example,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

const game = new Phaser.Game(config);
*/

const config = {
    type: Phaser.AUTO,
    width: viewport_w,
    height: viewport_h,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
    
}

const game = new Phaser.Game(config)

game.scene.add('scene_title', Scene_Title)
game.scene.add('scene_game', Scene_Game)
game.scene.add('scene_test', Scene_Test)

game.scene.start('scene_game')
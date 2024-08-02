import Phaser from 'phaser'

import Scene_Title from './scenes/scene_title'
import Scene_Game from './scenes/Scene_Game'

import { viewport_h, viewport_w} from './globals.js';

const config = {
    type: Phaser.AUTO,
    width: viewport_w,
    height: viewport_h,
    
}

const game = new Phaser.Game(config)

game.scene.add('scene_title', Scene_Title)
game.scene.add('scene_game', Scene_Game)

game.scene.start('scene_game')
import Phaser from 'phaser'

import Scene_Title from './scenes/scene_title'
import Scene_Game from './scenes/Scene_Game'

const viewport_w = 1080
const viewport_h = 720
const config = {
    width: viewport_w,
    height: viewport_h,
    type: Phaser.AUTO
}

const game = new Phaser.Game(config)

game.scene.add('scene_title', Scene_Title)
game.scene.add('scene_game', Scene_Game)

game.scene.start('scene_title')
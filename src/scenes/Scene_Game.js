import Phaser from "phaser"

export default class Scene_Game extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        const sceneGame_puntuacion_text = this.add.text(window.innerWidth/10, window.innerHeight/15, 'Puntuación: 0')
        sceneGame_puntuacion_text.setOrigin(0, 0)
    }
}
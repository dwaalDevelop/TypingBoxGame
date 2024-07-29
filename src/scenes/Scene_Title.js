import Phaser from "phaser"

export default class Scene_Title extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        const sceneTile_text = this.add.text(window.innerWidth/2, window.innerHeight/5, 'Type Box')
        sceneTile_text.setOrigin(0.5, 0.5) //set origin from 0 left, 1 right
    }
}
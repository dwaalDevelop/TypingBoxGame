import Phaser from "phaser"

var letters_4_words = []

export default class Scene_Title extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        const sceneTile_text = this.add.text(window.innerWidth/2, window.innerHeight/5, 'Type Box');
        sceneTile_text.setOrigin(0.5, 0.5); //set origin from 0 left, 1 right

        //save words files
        SceneTitle_Read_Text('all_words/letters_4.txt');

    }
}

function SceneTitle_Read_Text(file) {
    const fs = require('fs');

    fs.readFile(file, 'utf8', (err, data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data.toString());
    });
}
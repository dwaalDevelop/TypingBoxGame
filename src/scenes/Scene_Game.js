import Phaser from "phaser";
import sceneGame_all_words from '../../all_words/spanish.json';
import { viewport_h, viewport_w, viewport_margin, style_letters,
    sceneGame_all_letters
} from '../globals.js';
import { Print_Words } from "../utils.js";
import { Object_Write_Word, Object_Letter_Box}  from "../objects.js";

//import Object_Write_Word from './Object_Write_Word.js';

var sceneGame_level_words = [];
var number_of_words = 2;

export class Object_Falling_Box {
    // word id - entre 0 y número de palabras
    // letter
    // correct_letter
    // position
    constructor(game, word_id, word_position) {
        this.word_id = word_id;
        this.pos_x = word_position[0]; //plus a little rand variation
        this.pos_y = -10 ;

        this.check_collisiton = true;
        this.is_moving = false;

        this.sprite = game.add.sprite(this.pos_x, this.pos_y, "box");

    }

}

document.addEventListener('keydown', function(event) {
    console.log(`Tecla presionada: ${event.key}`);
});

export default class Scene_Game extends Phaser.Scene
{

    preload()
    {
        this.load.image('box', 'assets/woodBox.png');
    }

    create()
    {

        this.create_words(number_of_words); //num de palabras
        this.draw_words(this, sceneGame_level_words);

        //Print_Words(this, sceneGame_level_words[0].word, 2, 10, 10);

        const sceneGame_puntuacion_text = this.add.text(window.innerWidth / 10, window.innerHeight / 15, 'Puntuación: 0');
        sceneGame_puntuacion_text.setOrigin(0, 0);

        //var test_box = new Object_Falling_Box(this, 0, sceneGame_level_words[0].Get_Canvas_Pos)
        var test_box = this.add.sprite(200, 200, "box");
        //console.log(sceneGame_all_words[0][2])

        // Contar las líneas del archivo y actualizar el texto de puntuación
        
        
        console.log(sceneGame_level_words);

        //console.log(sceneGame_level_words[0].Get_Letter());
        console.log("choosing letter");
        new Object_Letter_Box(sceneGame_level_words[0].Get_Letter());


        //const box = this.add.rectangle(sceneGame_level_words[0].pos_x, sceneGame_level_words[0].pos_y, 120, 40, 0xffffff)
        //const box2 = this.add.rectangle(sceneGame_level_words[1].pos_x, sceneGame_level_words[1].pos_y, 120, 40, 0xffffff)
        //box.setOrigin(0.5, 0.5);
        //box2.setOrigin(0.5, 0.5);

        //this.physics.add.existing(box);
        //box.body.setVelocity(0, -100);
    }

    update(time, delta) {
        
        
    }

    create_words(level) { //por ahora level es el número de palabras
        console.log("choosing words");

        for ( let i = 1; i <= level; i++) {
            sceneGame_level_words.push(new Object_Write_Word(i, level));
        }
    }

    draw_words(game, selected_words) {
        console.log(selected_words[0].word)

        for ( let i = 0; i < number_of_words; i++) {
            Print_Words(game,
                selected_words[i].word,
                selected_words[i].next_position,
                selected_words[i].Get_Canvas_Pos());
        }
    }
}


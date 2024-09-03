import Phaser from "phaser";
import sceneGame_all_words from '../../all_words/spanish.json';
import { viewport_h, viewport_w, viewport_margin, style_letters,
    sceneGame_all_letters
} from '../globals.js';
//import Object_Write_Word from './Object_Write_Word.js';

let sceneGame_level_words = [];



function Get_Random(max) {
    return Math.floor(Math.random() * max);
}

class Object_Write_Word {
    
    // id
    // word
    // length
    // next position
    // next letter
    // completed
    constructor(column_my_num, column_total_num) {
        this.id = Get_Random(sceneGame_all_words.length);
        this.word = sceneGame_all_words[this.id];
        this.next_position = 0;
        this.next_letter = this.word[0];
        this.completed = false;

        // X depends on the number of boxes
        this.pos_x = parseInt((((viewport_w - viewport_margin) / (column_total_num +1)) * column_my_num ) + viewport_margin/2);
        // Y allways the same height
        this.pos_y = parseInt((viewport_h / 10) *9);

        //this.pos_y = 600;
        //this.text = this.add.text( this.pos_x, this.pos_y, this.word, style_letters);
        // word selected
        console.log(this.word);

    }

    Draw_Text() {
        
    }

    Get_Letter() {
        return this.next_letter;
    }
    
    Check_Letter(letter) {

        if( letter == this.writeWord_next_letter) {
            console.log("Letra Correcta");

            this.writeWord_next_position++;
            // check if finished word
            if( this.writeWord_next_position >= this.writeWord_word.length) {
                console.log("Palabra Acabada");
                this.writeWord_completed = true;
                return;
            } else {
                this.writeWord_next_letter = this.writeWord_word[this.writeWord_next_position];
            }
        }
    }
}

class Object_Letter_Box {

    //correct letter
    //selected letter
    //falling speed
    constructor( next_letter) {
        this.correct_letter = next_letter;
        this.selected_letter = "";
        
        //select if its gonna be correct/incorect
        var prob_of_correct_letter = 3;
        if ( Get_Random(prob_of_correct_letter) == 1){
            this.selected_letter = this.correct_letter;
        }
        else {
            var selection_done = false;

            while ( !selection_done){
                this.selected_letter = "";
                var index = Get_Random(sceneGame_all_letters.length);
                this.selected_letter = sceneGame_all_letters.charAt(index);
                //check is not correct letter
                if ( this.selected_letter != this.correct_letter){
                    selection_done = true;
                }
            }   
        }

        console.log(this.correct_letter + " " + this.selected_letter);

    }
}

export default class Scene_Game extends Phaser.Scene
{

    preload()
    {

    }

    create()
    {

        const style = { font: '24px Arial', fill: '#ffffff' };
        this.create_words(2); //num de palabras

        // Create the text object
        var textObject1 = this.add.text(sceneGame_level_words[0].pos_x, sceneGame_level_words[0].pos_y, sceneGame_level_words[0].word, style);
        textObject1.setOrigin(0.5, 0.5);
        var textObject2 = this.add.text(sceneGame_level_words[1].pos_x, sceneGame_level_words[1].pos_y, sceneGame_level_words[1].word, style);
        textObject2.setOrigin(0.5, 0.5);


        const sceneGame_puntuacion_text = this.add.text(window.innerWidth / 10, window.innerHeight / 15, 'Puntuación: 0');
        sceneGame_puntuacion_text.setOrigin(0, 0);

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

    create_words(level) { //por ahora level es el número de palabras
        console.log("choosing words");

        for (var i = 1; i <= level; i++) {
            sceneGame_level_words.push(new Object_Write_Word(i, level));
        }
    }
}


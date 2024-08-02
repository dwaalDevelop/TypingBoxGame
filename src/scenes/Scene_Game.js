import Phaser from "phaser"
import sceneGame_all_words from '../../all_words/spanish.json'

function Get_Random(max) {
    return Math.floor(Math.random() * max);
}
class Object_WriteWord {
    
    // id
    // word
    // length
    // next position
    // next letter
    // completed
    constructor(column_pos, column_num) {
        this.id = Get_Random(sceneGame_all_words.length);
        this.word = sceneGame_all_words[this.id];
        this.next_position = 0;
        this.next_letter = this.word[0];
        this.completed = false;

        // X depends on the number of boxes
        this.pos_x = (((window.innerWidth - viewport_margin) / column_num +1) * column_pos ) + viewport_margin/2;
        // Y allways the same height
        this.pos_y = (window.innerHeight / 10) *8; 

        this.text = this.add.text( this.pos_x, this.pos_y, this.word, style_letters);
        // word selected
        console.log(this.word);

    }

    checkLetter(letter) {

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

export default class Scene_Game extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        const sceneGame_puntuacion_text = this.add.text(window.innerWidth / 10, window.innerHeight / 15, 'Puntuación: 0');
        sceneGame_puntuacion_text.setOrigin(0, 0);

        //console.log(sceneGame_all_words[0][2])

        // Contar las líneas del archivo y actualizar el texto de puntuación
        this.wordObject = new Object_WriteWord(1, 2);
        
        
        const box = this.add.rectangle(this.wordObject.pos_x, this.wordObject.pos_y, 70, 70, 0xffffff)
    }
}


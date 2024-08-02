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
    constructor() {
        this.writeWord_id = Get_Random(sceneGame_all_words.length);
        this.writeWord_word = sceneGame_all_words[this.writeWord_id];
        //this.writeWord_length = this.writeWord_word.length;
        this.writeWord_next_position = 0;
        this.writeWord_next_letter = this.writeWord_word[0];
        this.writeWord_completed = false;

        // word selected
        console.log(this.writeWord_word);

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


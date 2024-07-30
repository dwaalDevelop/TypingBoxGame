import Phaser from "phaser"

class Object_WriteWord {
    constructor(word_length) {
        this.writeWord_word_length = word_length
        this.writeWord_actual_position = 0

        //select word
        console.log("trying to find word")
        console.log(this.writeWord_countLines(word_length))


    }

    writeWord_countLines(word_length) {
        //world lenght to text to know witch file

        let file_path = '../../all_words/letters_4.txt'
        try {
            let fr = new FileReader();
                fr.onload = function () {
                    document.getElementById('output')
                        .textContent = fr.result;
                }

                fr.readAsText(this.files[0]);

            return lines.length
        } catch (error) {
            console.error('Error al leer el archivo:', error);
            return 0;
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

        const objectWriteWord = new Object_WriteWord(4);
        console.log("hell yeah")

        // Contar las líneas del archivo y actualizar el texto de puntuación

        
    }
}

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
    constructor(coumn_my_num, coumn_total_num) {
        this.id = Get_Random(sceneGame_all_words.length);
        this.word = sceneGame_all_words[this.id];
        this.next_position = 0;
        this.next_letter = this.word[0];
        this.completed = false;

        // X depends on the number of boxes
        this.pos_x = parseInt((((viewport_w - viewport_margin) / (coumn_total_num +1)) * coumn_my_num ) + viewport_margin/2);
        // Y allways the same height
        this.pos_y = parseInt((viewport_h / 10) *9);

        //this.pos_y = 600;
        //this.text = this.add.text( this.pos_x, this.pos_y, this.word, style_letters);
        // word selected
        console.log(this.word);

    }

    draw_Text() {
        
    }

    check_Letter(letter) {

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
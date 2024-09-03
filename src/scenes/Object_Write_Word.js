function Get_Random(max) {
    return Math.floor(Math.random() * max);
}

export class Object_Write_Word {
    
    // id
    // word
    // length
    // next position
    // next letter
    // completed
    constructor(column_my_num, column_total_num) {
        this.id = Get_Random(sceneGame_all_words.length);
        this.word = sceneGame_all_words[this.id].normalize('NFC');
        this.next_position = 0;
        this.next_letter = this.word[0];
        this.completed = false;
        console.log(this.next_letter);

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

export class Object_Letter_Box {

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

export function Print_Words(game, selected_string, actual_leter, word_canvas_pos) {

    if (typeof selected_string !== 'string') {
        console.error('selected_string debe ser una cadena de texto');
        return;
    }

    let initial_string = selected_string.substring(0, actual_leter);
    let final_string = selected_string.substring(actual_leter);

    let text1 = game.add.text(word_canvas_pos[0], word_canvas_pos[1], initial_string, {
        font: '24px Arial',
        fill: '#808080',
        align: 'center'
    });
    text1.setOrigin(0.5, 0.5);

    let text2 = game.add.text(word_canvas_pos[0] + text1.width, word_canvas_pos[1], final_string, {
        font: '24px Arial',
        fill: '#ffffff',
        align: 'center'
    });
    text2.setOrigin(0.5, 0.5);

    //Adjust position
    text2.x = text1.x + text1.width;

}
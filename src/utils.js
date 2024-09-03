
export function Print_Words(canvas, selected_string, actual_leter, x_pos, y_pos) {

    if (typeof selected_string !== 'string') {
        console.error('selected_string debe ser una cadena de texto');
        return;
    }

    let initial_string = selected_string.substring(0, actual_leter);
    let final_string = selected_string.substring(actual_leter);

    let text1 = canvas.add.text(100, 100, initial_string, {
        font: '32px Arial',
        fill: '#ff0044',
        align: 'center'
    });

    // Crear el segundo objeto de texto con un estilo diferente
    let text2 = canvas.add.text(100 + text1.width, 100, final_string, {
        font: '32px Arial',
        fill: '#0044ff',
        align: 'center'
    });

    // Ajustar la posición de text2 para que se alinee con text1
    text2.x = text1.x + text1.width;

}
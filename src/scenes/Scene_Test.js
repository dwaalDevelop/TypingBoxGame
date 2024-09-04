import Phaser from "phaser";

export default class Scene_Game extends Phaser.Scene {
    preload() {
        // Carga la imagen "box"
        this.load.image("box", "woodBox.png");
    }

    create() {
        // Crea el sprite "box" después de que se haya cargado la imagen
        var test_box = this.add.sprite(100, 200, "box");
    }

    update(time, delta) {
        // Aquí puedes agregar la lógica de actualización del juego
    }
}

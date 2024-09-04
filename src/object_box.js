
export class Object_Falling_Box {
    // word id - entre 0 y número de palabras
    // letter
    // correct_letter
    // position
    constructor(game, word_id, word_position) {
        this.word_id = word_id;
        this.pos_x = word_position; //plus a little rand variation
        this.pos_y = -10 ;

        this.check_collisiton = true;
        this.is_moving = false;

        this.sprite = game.add.sprite(this.pos_x, this.pos_y, "box");

    }
    
    constructor(initialThread) {
        this.myThread = initialThread
        this.img = game.add.sprite(threadPosition[initialThread], yBug, "enemy")
        this.img.scale.setTo(0.15, 0.15)
        this.img.anchor.setTo(0.5,0.5)

        this.rotationTween = game.add.tween(this.img).to({ angle: 360 }, 2000, Phaser.Easing.Linear.None);
        this.rotationTween.loop(true);
        this.rotationTween.start();
        bugsGroup.addChild(this.img)

        this.img.x = threadPosition[initialThread]
        this.img.y = yBug

        game.physics.arcade.enable(this.img)

        this.checkCollision = true

        this.isMoving = false
        this.direction = false

    }
}
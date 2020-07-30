class Ground{
    constructor(x, y, width, height) {
        var ground_options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        World.add(world, this.body);

        this.width = width
        this.height = height;
    }

    display() {
        rectMode(CENTER);
        var pos = this.body.position;
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
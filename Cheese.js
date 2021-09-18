class Cheese {
  constructor(x, y) {
    this.body = createSprite(x, y, 50, 50);
    this.image = loadImage("images/Cheese.png");
    this.body.addImage(this.image);
    this.body.scale=0.1;
  }

}

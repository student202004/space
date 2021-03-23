class Ship{
    constructor(x){
      this.x=x;
      this.y=350;
      this.width=30;
      this.height=40;
      this.image=loadImage("images/SPACESHIP3.png");;
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,30,40);
}

   
   

}
class Form{
constructor(){
    this.input=createInput("").attribute("placeholder","Enter youe name!");
    this.greeting=createElement("h3");
    this.button=createButton("Start!");
    this.image=loadImage("background2.jpg")
}
 
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}

display(){
this.input.position(width/2-100,height-200);
this.greeting.position(width/2-100,height-300);
this.button.position(width/2-80,height-150);

this.button.mousePressed(()=>{
    /*background2=createSprite(width,height);
    background2.addImage(background2Img);
    background2.velocityX = -5;
    background2.scale=4 
   background1.destroy()*/
   
 
    this.input.hide()
    this.button.hide()
 var name=this.input.value()
 
    this.greeting.html("hello "+name)
   
   
})
 }
start(){
    form.hide();
    background2=createSprite(width,height);
    background2.addImage(background2Img);
    background2.velocityX = -5;
    background2.scale=4 
   background1.destroy()
   this.input.hide()
    this.button.hide()
}
}
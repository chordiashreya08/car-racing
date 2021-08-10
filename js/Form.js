class Form
{
constructor()
{
this.input=createInput().attribute("placeholder","enter your name here");
this.button= createButton("play");
this.greeting= createElement("h3");

}
hide()
{
this.greeting.hide();
this.button.hide(); 
this.input.hide();
}

display()
{
var title=createElement("h2");
title.html("car racing game");
title.position(450,100);

this.input.position(450,250);

this.button.position(450,350);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();

 player.name=this.input.value();
playerCount= playerCount+1;
player.index=playerCount;
player.update();
player.updateCount(playerCount);

this.greeting.html("welcome "+player.name); 
this.greeting.position(450,320);

});
}
}

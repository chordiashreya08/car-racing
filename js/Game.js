class Game
{
 constructor()
{
}

getState()
{
var gameStateref=database.ref("gameState");
gameStateref.on("value",function(data){
     gameState=data.val()
    })
}

update(state)
{
database.ref("/").update({gameState:state});
}

async start()
{
 if(gameState === 0)
 { player = new Player();
var pc=await database.ref("playerCount").once("value");
if(pc.exists())
{
playerCount=pc.val()
player.getCount();
}
 
form = new Form()
form.display(); 
 } }

 play()
 {
form.hide();
text("game has started",400,350);
Player.getPlayerInfo();

if(allPlayers!==undefined){
 var displayposition=130;
 for(var p in allPlayers)
 {

if (p === "player" + player.index) 
fill("red")
 else fill("black");
 displayposition+=20;
text(allPlayers[p].name+":"+allPlayers[p].distance,120,displayposition);
 }   
}

if(keyIsDown(UP_ARROW)&& player.index!==null)
{
    player.distance+=10;
    player.update();
}
 }
}
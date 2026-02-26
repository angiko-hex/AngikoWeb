let board;
let boardWidth=750;
let boardHeight=350;
let context;
const worldEl = document.querySelector('[data-world]') || document.getElementById('game');
const character = document.getElementById('character');
const startButton = document.querySelector('.start-screen');
const scoreDisplay = document.querySelector('.score');
const gameOverEl = document.getElementById('gameOver');
const finalScoreEl = document.getElementById('finalScore');
const finalDistanceEl = document.getElementById('finalDistance');
const instructionsEl = document.getElementById('instructions');
let distance = 0;

let gameStarted = false;


//dino
let dinoWidth= 64;//ilyen széles
let dinoHeight = 64; //ilyen magas
let dinoX =20; //vízszint, x 0 baloldalt fent mint az y0, fent jobb oldalt az x 750 és y 0
let dinoY=  boardHeight - dinoHeight; //függőleges hogy a dino talpa a legalján legyen
let dinoImg;

let dino = { //ebből áll össze a dinónk, elővv meghatároztuk ezeket meg az értékeiket most össze varrtuk
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
  height: dinoHeight
}
//cactus
let cactusArray = [];
let cactus1Width= 34;
let cactus2Width=69;
let cactus3Width=102;
let cactusHeight=70;
let cactusX = 700;
let cactusY = boardHeight-cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

//läufen
let velocityX = -2; //a cactus bal sebességgel megy, koordinátán balra a minusz!
let  velocityY = 0; // marad a földön
let gravity = .2;

let gameOver = false;
let score = 0;

window.onload = function (){ //ha betölt az ablak megjelenik a board id convas értékei stílusa szerint
  board = document.getElementById("board");
  board.width = boardWidth;
  board.height = boardHeight;
  context = board.getContext("2d");

  dinoImg = new Image();
  dinoImg.src = "game_img/lazalom.png";

    requestAnimationFrame(update);

//anfänglische dino zeichnen
//context.fillStyle="green";
//context.fillRect=(dino.x,dino.y,dino.width,dino.height); grüne kubus mit Dino-Parametern

dinoImg = new Image ();
dinoImg.src="game_img/lazalom.png";
dinoImg.onload = function(){
context.drawImage(dinoImg, dino.y,dino.x,dino.width,dino.height);
} 
cactus1Img= new Image ();
cactus1Img.src="game_img/block.png";

cactus2Img= new Image ();
cactus2Img.src="game_img/block2.png";

cactus3Img= new Image ();
cactus3Img.src="game_img/block3.png";

  requestAnimationFrame(update);
setInterval(placeCactus,1000) //generieren ein cactus pro second
document.addEventListener("keydown",moveDino) //ha gomblenyomás történik jön a funkció, figyeljük melyik volt.
 score += (speed / 100) * (dt / 16.67);
  distance += (speed / 10) * (dt / 16.67);
  if (scoreDisplay) scoreDisplay.textContent = Math.floor(score);

  if (now - (window._lastSpeedIncreaseAt || now) > cfg.speedIncreaseInterval) {
    window._lastSpeedIncreaseAt = now;
    speed += cfg.speedIncreaseAmount;
  }

  if (collisionCheck()) { endGame(); return; }
  requestAnimationFrame(gameLoop)

}
function update() //draw frames, minden frameben ujra rajzolódik, ugrás miatt fontos
{ requestAnimationFrame(update);
    if (gameOver){return; // ha vége a játéknak nem tudsz ugranin nem kell kaktusz, draw
}
  context.clearRect(0, 0, board.width, board.height);
  //dino
  velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY,dinoY )//visszaesik le ennyivel, gravitácio dinonak, nem megy túl a földön
  context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

  
    
    //folyamatos block rajzolás kell szóval loop az array-vel
    //"cactus"
    for (let i =0; i < cactusArray.length; i++) {
    let cactus = cactusArray[i];
    cactus.x += velocityX;
context.drawImage(cactus.img, cactus.x,cactus.y,cactus.width,cactus.height);

if (detectCollision(dino,cactus)){
    gameOver=true;
    dinoImg.src="/game_img/lazalom_dead.png";
    dinoImg.onload = function(){
context.drawImage(dinoImg, dino.x,dino.y,dino.width,dino.height);
    }
  }
}
}

function moveDino(e){ 
    if (gameOver){return; }// ha vége a játéknak nem tudsz ugranin nem kell kaktusz, draw
        //keybind listen/billentyű figyelés
        if ((e.code == "Space" || e.code == "ArrowUp") && dino.y == dinoY) {//&& dino.y == dinoY a földön van mert ugyan az a meghatározott y mint az aktuális
        //ugri, springen, minusz mert visszafelé kicsinyedik az y, vissza azaz fenn, mert fentről megy a le y
        velocityY= -11;}
}
function placeCactus (){
    if (gameOver){return; // ha vége a játéknak nem tudsz ugranin nem kell kaktusz, draw
}
//platzen cactus
let cactus ={
    img : null,//azért null mert ezek a képektől függenek amiket használunk.
    x : cactusX,
    y : cactusY,
    width : null, //azért null mert ezek a képektől függenek amiket használunk.
    height:cactusHeight
} //szóval ezeket akarjuk használni, akkor randomizáljunk
let placeCactusChance = Math.random(); //0-9999...
// másodperceként van esély hogy lesz egy
if (placeCactusChance > .90)//10% hogy kapsz akadályt (block3)
{ cactus.img=cactus3Img;
    cactus.width = cactus3Width;
    cactusArray.push(cactus); //megadjuk hogy akkora lesz, és a gyűjtőből kivesszük
}
else if (placeCactusChance > .70)//30% hogy kapsz akadályt (block2)
{ cactus.img=cactus2Img;
    cactus.width = cactus2Width;
    cactusArray.push(cactus); 
}
else if (placeCactusChance > .50)//50% hogy kapsz akadályt (block1)
{ cactus.img=cactus1Img;
    cactus.width = cactus1Width;
  cactusArray.push(cactus);
}
if (cactusArray.lenght > 5) {
    cactusArray.shift();//eltávolítja az első elemet a tömbből szóval nem nő konstans a tömb mint 5, nem lassul a memória
}

}
function detectCollision(a,b) {
    return a.x < b.x + b.width && // a-fent bal sarka nem éri el b jobb sarkát
           a.x + a.width > b.x && //a jobb fenti sarka passes b felső bal sarkát
           a.y < b.y + b.height && //a felső bal sarka nem éri b alsó bal sarkát
           a.y + a.height > b.y // a bal sarka passes b felső bal sarkát
        }

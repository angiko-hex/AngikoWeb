$(document).ready(function() {
  console.log('jQuery loaded, ready to run familiar.js');
  
const cfg = {
  walkFrames: ['game_img/lazalom.png', 'game_img/lazalom_walk.png'],
  crouchImage: 'game_img/lazalom_crouch.png',
  deadImage: 'game_img/lazalom_dead.png',
  defaultImage: 'game_img/lazalom.png',
  obstacleImage: 'game_img/block.png', 
  gravity: 1,
  jumpImpulse: 18,
  maxHoldTime: 250,
  obstacleMinGap: 900,
  obstacleMaxGap: 1800,
  baseSpeed: 6,
  speedIncreaseInterval: 5000,
  speedIncreaseAmount: 0.5,
  minObstacleWidth: 30,
  maxObstacleWidth: 80,
  walkFrameInterval: 120
};

console.log('familiar.js loading...');

const worldEl = document.querySelector('[data-world]') || document.getElementById('game');
const character = document.getElementById('character');
const startButton = document.querySelector('.start-screen');
const scoreDisplay = document.querySelector('.score');
const gameOverEl = document.getElementById('gameOver');
const finalScoreEl = document.getElementById('finalScore');
const finalDistanceEl = document.getElementById('finalDistance');
const instructionsEl = document.getElementById('instructions');



let running = false;
let obstacles = [];
let lastFrameTime = 0;
let speed = cfg.baseSpeed;
let score = 0;
let distance = 0;
let spawnTimer = 0;
let nextSpawn = 1000;
let vy = 0;
let isOnGround = true;
let holdJumpStart = 0;
let isHoldingJump = false;

character.src = cfg.defaultImage;
character.classList.add('runner-character');

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function placeCharacterOnGround() {
  const worldRect = worldEl.getBoundingClientRect();

  const charH = character.offsetHeight || 64;

  character.style.position = 'absolute';
  character.style.left = '60px';
  character.style.top = (worldRect.height - charH ) + 'px';

  console.log('placed character at top:', character.style.top);
  requestAnimationFrame(gameLoop);

}



window.addEventListener('load', placeCharacterOnGround);
window.addEventListener('resize', placeCharacterOnGround);

function startGame() {
  console.log('startGame');
  running = true;
  obstacles.forEach(o => o.el.remove());
  obstacles = [];
  score = 0; distance = 0;
  speed = cfg.baseSpeed;
  vy = 0; isOnGround = true;
  spawnTimer = 0;
  nextSpawn = rand(cfg.obstacleMinGap, cfg.obstacleMaxGap);
  lastFrameTime = performance.now();
  gameOverEl && (gameOverEl.style.display = 'none');
  startButton && (startButton.style.display = 'none');
  instructionsEl && (instructionsEl.style.display = 'none');
 character.src = cfg.defaultImage;
character.style.display = "block";
placeCharacterOnGround;

  requestAnimationFrame(gameLoop);
}

function endGame() {
  running = false;
  gameOverEl && (gameOverEl.style.display = 'block');
  finalScoreEl && (finalScoreEl.textContent = Math.floor(score));
  finalDistanceEl && (finalDistanceEl.textContent = Math.floor(distance));
  if (cfg.deadImage) character.src = cfg.deadImage;
  console.log('GAME OVER');
requestAnimationFrame(gameLoop);
  
}

function spawnObstacle() {
  const el = document.createElement('div');
  el.className = 'obstacle';
  const w = rand(cfg.minObstacleWidth, cfg.maxObstacleWidth);
  el.style.width = `${w}px`;
  el.style.height = `${w}px`;
  el.style.position = 'absolute';
  el.style.left = worldEl.clientWidth + 'px';
  el.style.bottom = '2px';
  el.style.backgroundImage = `url(${cfg.obstacleImage})`;
  el.style.backgroundSize = 'cover';
  worldEl.appendChild(el);
  obstacles.push({ el, x: worldEl.clientWidth, w });
}

function collisionCheck() {
  const cRect = character.getBoundingClientRect();
  for (let i = 0; i < obstacles.length; i++) {
    const oRect = obstacles[i].el.getBoundingClientRect();
    if (!(cRect.right < oRect.left ||
          cRect.left > oRect.right ||
          cRect.bottom < oRect.top ||
          cRect.top > oRect.bottom)) {
      return true;
      
    }
  }
  return false;
  
}

function gameLoop(now) {
  if (!running) return;
  const dt = Math.min(50, now - lastFrameTime);
  lastFrameTime = now;

  // physics
  if (!isOnGround) {
    vy += cfg.gravity * (dt / 16.67);
    const top = parseFloat(character.style.top || 0) + vy;
    character.style.top = Math.min(top, getGroundY()) + 'px';
    if (parseFloat(character.style.top) >= getGroundY()) {
      character.style.top = getGroundY() + 'px';
      vy = 0; isOnGround = true;
    }
  }

  if (isHoldingJump && !isOnGround) {
    const held = performance.now() - holdJumpStart;
    if (held < cfg.maxHoldTime) vy -= (cfg.jumpImpulse / 100) * (dt / 16.67);
  }

  // obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    const o = obstacles[i];
    o.x -= speed * (dt / 16.67);
    if (o.x + o.w < -200) { o.el.remove(); obstacles.splice(i, 1); continue; }
    o.el.style.left = o.x + 'px';
  }

  spawnTimer += dt;
  if (spawnTimer >= nextSpawn) {
    spawnObstacle();
    spawnTimer = 0;
    nextSpawn = rand(cfg.obstacleMinGap, cfg.obstacleMaxGap);
  }

  score += (speed / 100) * (dt / 16.67);
  distance += (speed / 10) * (dt / 16.67);
  if (scoreDisplay) scoreDisplay.textContent = Math.floor(score);

  if (now - (window._lastSpeedIncreaseAt || now) > cfg.speedIncreaseInterval) {
    window._lastSpeedIncreaseAt = now;
    speed += cfg.speedIncreaseAmount;
  }

  if (collisionCheck()) { endGame(); return; }
  requestAnimationFrame(gameLoop);
}

function getGroundY() {
  const worldHeight = worldEl.clientHeight;
  const charHeight = character.offsetHeight; 
  return worldHeight - charHeight ;
}

// input
function tryJump() {
  if (!running) { startGame(); return; }
  if (isOnGround) {
    isOnGround = false;
    vy = -cfg.jumpImpulse;
    
    holdJumpStart = performance.now();
    isHoldingJump = true;
  } else { isHoldingJump = true; }
}
function releaseJump() { isHoldingJump = false; }

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); tryJump(); }
  if (e.code === 'ArrowDown') { e.preventDefault(); /* crouch */ }
});
window.addEventListener('keyup', (e) => {
  if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); releaseJump(); }
});

startButton && startButton.addEventListener('click', startGame);
worldEl && worldEl.addEventListener('pointerdown', (e) => { if (e.button !== undefined && e.button !== 0) return; tryJump(); });
window.addEventListener('pointerup', releaseJump);

const restartBtn = gameOverEl && gameOverEl.querySelector('button');
if (restartBtn) restartBtn.addEventListener('click', () => location.reload());

window.addEventListener('keydown', (e) => { if (!running && (!startButton || startButton.style.display !== 'none')) startGame(); });});
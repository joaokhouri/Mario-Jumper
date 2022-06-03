const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const jumpAudio = new Audio("./assets/mario-jump-sound.mp3");
const bgMusic = new Audio("./assets/bgmusic.mp3");

bgMusic.play();
bgMusic.volume = 0.03;
bgMusic.loop;

const jump = () => {
  mario.classList.add("jump");
  jumpAudio.play();
  jumpAudio.volume = 0.05;

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    pipe.style.animation = "none";
    pipe.style.bottom = "0";

    mario.src = "./assets/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    document.getElementById("reset").style.display = "block";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);

function resetGame() {
  document.location.reload(true);
}

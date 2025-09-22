const songs = [
  {
    img: "./image/logo-5.avif",
    title: "Faded – Alan Walker",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    img: "./image/logo-3.avif",
    title: "Shape of You – Ed Sheeran",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    img: "./image/logo-4.avif",
    title: "Believer – Imagine Dragons",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

let currentSong = 0;

const head = document.getElementById("heading");
const playBtn = document.getElementById("play");
const images = document.getElementById("image");
const leftBtn = document.getElementById("left");
const pauseBtn = document.getElementById("pause");
const rightBtn = document.getElementById("right");
const audios = document.getElementById("audio");

function loadSongs(index) {
  const song = songs[index];
  images.src = song.img;
  head.innerText = song.title;
  audios.src = song.src;
}

function playSong() {
  audios.play();
  playBtn.classList.add("hidden"); // play hide
  pauseBtn.classList.remove("hidden"); // pause show
}

function pauseFun() {
  audios.pause();
  pauseBtn.classList.add("hidden"); // pause hide
  playBtn.classList.remove("hidden"); // play show
}

function nextSong() {
  currentSong++;
  if (currentSong >= songs.length) {
    currentSong = 0;
  }
  loadSongs(currentSong);
  playSong();
}

function prevSong() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }
  loadSongs(currentSong);
  playSong();
}

// Event Listeners
playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseFun);
rightBtn.addEventListener("click", nextSong);
leftBtn.addEventListener("click", prevSong);

// Load first song
loadSongs(currentSong);

// By default pause button hidden rahe
pauseBtn.classList.add("hidden");

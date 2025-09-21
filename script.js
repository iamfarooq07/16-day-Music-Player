const songs = [
  {
    img: "./logo.avif",
    title: "Sample Song 1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    img: "./logo.avif",
    title: "Sample Song 2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    img: "./logo.avif",
    title: "Sample Song 3",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

let currentSong = 0;

const playBtn = document.getElementById("play");
const images = document.getElementById("image");
const leftBtn = document.getElementById("left");
const pauseBtn = document.getElementById("pause");
const rightBtn = document.getElementById("right");
const audios = document.getElementById("audio");
console.log(play);

playBtn.addEventListener("click", () => {
  console.log("clicked me");

  images.src = songs[0].img;
});

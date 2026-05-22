const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  alert("Next Song");
}

function prevSong() {
  alert("Previous Song");
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

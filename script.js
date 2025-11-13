const video = document.getElementById("hzVideo");
const playButton = document.getElementById("playButton");

// Clicar no botão começa o vídeo
playButton.addEventListener("click", () => {
  video.play();
});

// Quando o vídeo começa, esconde o botão
video.addEventListener("play", () => {
  playButton.classList.add("hidden");
});

// Se o vídeo for pausado manualmente, mostra o botão de novo
video.addEventListener("pause", () => {
  // Se chegou ao fim, não mostra (opcional, ajuste se quiser)
  if (video.currentTime < video.duration) {
    playButton.classList.remove("hidden");
  }
});

// Ao terminar o vídeo, mostra o botão de novo
video.addEventListener("ended", () => {
  playButton.classList.remove("hidden");
});
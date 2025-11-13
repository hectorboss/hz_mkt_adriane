const video = document.getElementById("hzVideo");
const playButton = document.getElementById("playButton");

// Quando clicar no botão, inicia o vídeo
playButton.addEventListener("click", async () => {
  try {
    await video.play();
    playButton.classList.add("hidden");
  } catch (err) {
    console.error("Erro ao tentar reproduzir:", err);
  }
});


// Quando o vídeo começa a rodar, esconde o botão
video.addEventListener("play", () => {
  playButton.classList.add("hidden");
});

// Se o vídeo for pausado manualmente, mostra o botão novamente
video.addEventListener("pause", () => {
  // Só mostra se não estiver no fim
  if (video.currentTime < video.duration) {
    playButton.classList.remove("hidden");
  }
});

// Quando o vídeo termina, mostra o botão novamente
video.addEventListener("ended", () => {
  playButton.classList.remove("hidden");
});

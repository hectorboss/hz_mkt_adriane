const openBtn = document.getElementById("openVideo");
const closeBtn = document.getElementById("closeVideo");
const modal = document.getElementById("videoModal");
const video = document.getElementById("hzVideo");

// Abrir modal e começar o vídeo
openBtn.addEventListener("click", () => {
  modal.classList.add("open");
  video.currentTime = 0;
  video.play();
});

// Fechar modal (botão X)
closeBtn.addEventListener("click", () => {
  video.pause();
  modal.classList.remove("open");
});

// Fechar clicando fora do vídeo
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    video.pause();
    modal.classList.remove("open");
  }
});

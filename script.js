function formatTime(s) {
  s = Math.max(0, s|0);
  const m = (s/60)|0, sec = (s%60)|0;
  return String(m).padStart(2,'0') + ':' + String(sec).padStart(2,'0');
}

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('video');
  const overlayPlay = document.getElementById('playButton');
  const togglePlay = document.getElementById('togglePlay');
  const mute = document.getElementById('mute');
  const seek = document.getElementById('seek');
  const time = document.getElementById('time');

  // Atualiza duração quando os metadados carregarem
  video.addEventListener('loadedmetadata', () => {
    seek.max = video.duration || 0;
    time.textContent = `00:00 / ${formatTime(video.duration)}`;
  });

  // Atualiza barra de progresso
  video.addEventListener('timeupdate', () => {
    seek.value = video.currentTime;
    time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  });

  // Play pelo overlay (som ativado)
  overlayPlay.addEventListener('click', async () => {
    try {
      video.muted = false; // garante som
      await video.play();
      overlayPlay.classList.add('hidden');
    } catch (e) {
      console.error('Falha ao reproduzir:', e);
    }
  });

  // Botão play/pause
  togglePlay.addEventListener('click', async () => {
    try {
      if (video.paused) {
        await video.play();
        overlayPlay.classList.add('hidden');
      } else {
        video.pause();
      }
    } catch (e) { console.error(e); }
  });

  // Mudo/Desmudo
  function updateMuteIcon(){
    mute.textContent = video.muted ? '🔇' : '🔊';
  }
  mute.addEventListener('click', () => {
    video.muted = !video.muted;
    updateMuteIcon();
  });
  updateMuteIcon();

  // Seek
  seek.addEventListener('input', () => {
    video.currentTime = parseFloat(seek.value);
  });

  // Mostra overlay quando vídeo termina
  video.addEventListener('ended', () => {
    overlayPlay.classList.remove('hidden');
  });
});

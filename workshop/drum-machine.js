function playSound(selector, soundName) {
      const audio = document.getElementById(selector);
      if (!audio) return;
      const pad = audio.parentElement;
      const display = document.getElementById('display');

      audio.currentTime = 0;
      audio.play().catch(err => console.log("Playback prevented:", err));

      display.innerText = soundName;

      pad.classList.add('active');
      setTimeout(() => {
        pad.classList.remove('active');
      }, 100);
    }

    const drumPads = document.querySelectorAll('.drum-pad');
    drumPads.forEach(pad => {
      const audioChild = pad.querySelector('.clip');
      const soundDescription = pad.id;
      const keyTrigger = audioChild.id;

      pad.addEventListener('click', () => {
        playSound(keyTrigger, soundDescription);
      });
    });

    document.addEventListener('keydown', (event) => {
      const key = event.key ? event.key.toUpperCase() : '';
      const audioChild = document.getElementById(key);

      if (audioChild) {
        const pad = audioChild.parentElement;
        const soundDescription = pad.id;
        playSound(key, soundDescription);
      }
    });
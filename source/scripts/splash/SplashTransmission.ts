export function splashTransmission(): void {
  const startBtn = document.getElementById('start');
  
  setTimeout((): void => {
    if (!localStorage.nooiseSkipedSlider) {
      startBtn!.classList.add('is--visible');
      startBtn!.addEventListener('click', (): void => {
        // put here the slider view
      });
    } else {} // <-- put here the Home render
  }, 1000);

  console.log(startBtn)
}
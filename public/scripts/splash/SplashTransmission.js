export function splashTransmission() {
    const startBtn = document.getElementById('start');
    setTimeout(() => {
        if (!localStorage.nooiseSkipedSlider) {
            startBtn.classList.add('is--visible');
            startBtn.addEventListener('click', () => {
                // put here the slider view
            });
        }
        else { } // <-- put here the Home render
    }, 1000);
    console.log(startBtn);
}

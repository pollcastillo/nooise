import { homeView } from "../home/MainView.js";
import { sliderView } from "../slider/SliderView.js";
export function splashTransmission() {
    const startBtn = document.getElementById('start');
    setTimeout(() => {
        if (!localStorage.nooiseSkipedSlider) {
            startBtn.classList.add('is--visible');
            startBtn.addEventListener('click', () => {
                sliderView.render();
            });
        }
        else {
            homeView.render();
        }
    }, 1000);
}

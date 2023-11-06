import { homeView } from "../home/HomeView.js";
import { sliderView } from "../slider/SliderView.js";

export function splashTransmission(): void {
  const startBtn = document.getElementById('start');
  
  setTimeout((): void => {
    if (!localStorage.nooiseSkipedSlider) {
      startBtn!.classList.add('is--visible');
      startBtn!.addEventListener('click', (): void => {
        sliderView.render()
      });
    } else {
      homeView.render();
    }
  }, 1000);
}
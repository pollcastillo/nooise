import { homeView } from "../home/MainView.js";

export function skipSlider() {
  if(!localStorage.nooiseSkipedSlider) {
    localStorage.setItem('nooiseSkipedSlider', 'true');
    homeView.render();
  }
}
import { homeView } from "../home/HomeView.js";

export function skipSlider() {
  if(!localStorage.nooiseSkipedSlider) {
    localStorage.setItem('nooiseSkipedSlider', 'true');
    homeView.render();
  }
}
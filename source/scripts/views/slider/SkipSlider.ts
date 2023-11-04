export function skipSlider() {
  if(!localStorage.nooiseSkipedSlider) {
    localStorage.setItem('nooiseSkipSlider', 'true');
  }
}
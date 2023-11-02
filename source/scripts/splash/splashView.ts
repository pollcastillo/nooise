import { type ViewDelegate } from "../tools/Delegates.js";
import { splashTransmission } from "./SplashTransmission.js";

class View implements ViewDelegate {
  render(): void {
    const root = document.getElementById('root');

    root!.innerHTML = `
      <div class='view'>
        <div class='view__content splash:content'>
          <div class='content'>
            <h1 class='uppercase'>Nooise</h1>
            <p class='uppercase'>Personaliza tus sonidos ambientales</p>

            <button class='btn btn-get__started' id='start'>Empezar</button>
          </div>
        </div>
      </div>
    `;

    splashTransmission();
  }
}

export const splashView: View = new View();
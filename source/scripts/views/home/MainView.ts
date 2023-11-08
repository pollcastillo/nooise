import { ViewDelegate } from "../../tools/Delegates";
import { Navigation } from "./components/Navigation/NavigationComponent.js";
import { Player } from "./components/Player/PlayerComponent.js";

class View implements ViewDelegate {
  render(): void {
    const root = document.getElementById('root');
    root!.innerHTML = `
      <div class='view'>
        <div class='view__content'>
          <div id='view-content'>iosadif</div>

          <div id='player-container'> lsa</div>
          <div id='navigation-container'></div>
        </div>


        <div class='background'>
          <div class='background-layer:blur'></div>
          <div class='background-layer:circle spin'></div>
        </div>
      </div>
    `;

    // Add dynamic view
    document.querySelector('.view')?.classList.add('d__view');

    // Draw Components
    Navigation.draw();
    Player.draw();
  }

}

export const homeView: View = new View();

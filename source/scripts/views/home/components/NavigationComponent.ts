import { InterfaceComponent } from "../../../tools/Delegates";

class Component implements InterfaceComponent {
  public draw(): void {
    const navigationContainer = document.getElementById('navigation-container');

    navigationContainer!.innerHTML = `
      <div class='navigation'>
        <button class='btn btn:navigation btn__navigation is--active' id='get-tracklist'>
            <icon>home</icon>
        </button>

        <button class='btn btn:navigation btn__navigation' id='get-playlist'>
            <icon>queue_music</icon>
        </button>

        <button class='btn btn:navigation btn__navigation' id='openSearch'>
            <icon>search</icon>
        </button>

        <button class='btn btn:navigation btn__navigation' id='goToSettings'>
            <icon>settings</icon>
        </button>
      </div>
    `;
  }
}

export const Navigation: Component = new Component();
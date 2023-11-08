import { NavigationController } from "./NavigationController.js";
class Component {
    draw() {
        const navigationContainer = document.getElementById('navigation-container');
        navigationContainer.innerHTML = `
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
        NavigationController.draw(true);
        NavigationController.control();
    }
}
export const Navigation = new Component();

class Component {
    draw() {
        const playerComponent = document.getElementById('player-container');
        playerComponent.innerHTML = `
        <div class='player'>
          <div class='track__info'>
            <div class='track__info--artwork'>
              <icon>coffee_maker</icon>
            </div>
          </div>

          <div class='track__list'>
            <ul>
              <li>Track</li>
              <li>Track</li>
              <li>Track</li>
              <li>Track</li>
              <li>Track</li>
            </ul>
          </div>
        </div>
      `;
    }
}
export const Player = new Component();

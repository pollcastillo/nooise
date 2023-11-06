import { ViewDelegate } from "../../tools/Delegates";

class View implements ViewDelegate {
  render(): void {
    const root = document.getElementById('root');

    root!.innerHTML = ``;
  }

}

export const homeView: View = new View();
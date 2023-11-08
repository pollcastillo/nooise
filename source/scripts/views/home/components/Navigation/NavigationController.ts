import { ControllerDelegate } from "../../../../tools/Delegates.js";

class Controller implements ControllerDelegate {
  private readonly debugControlMessages = `
    background-color: #F8F9EE;
    color: #000;
    border: 1ox solid #D8D7F7;
    font-weight: bolder;
    padding: 10px 20px;
    border-radius: 8px;
  `;

  private consoleLog(message: string, style: string) {
    console.log(`%cINTERNAL_MESSAGE: ${message}`, style)
  }

  public draw(debug?: boolean) {
    if (debug === true) {
      console.warn('Debugging navigation');
    }
  }

  public control(): void {
    this.consoleLog('controlling interface...', this.debugControlMessages);
  }
}

export const NavigationController: Controller = new Controller();
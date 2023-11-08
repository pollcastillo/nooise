class Controller {
    constructor() {
        this.debugControlMessages = `
    background-color: #F8F9EE;
    color: #000;
    border: 1ox solid #D8D7F7;
    font-weight: bolder;
    padding: 10px 20px;
    border-radius: 8px;
  `;
    }
    consoleLog(message, style) {
        console.log(`%cINTERNAL_MESSAGE: ${message}`, style);
    }
    draw(debug) {
        if (debug === true) {
            console.warn('Debugging navigation');
        }
    }
    control() {
        this.consoleLog('controlling interface...', this.debugControlMessages);
    }
}
export const NavigationController = new Controller();

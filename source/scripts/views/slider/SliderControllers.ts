// @filename: SliderContoller.ts 
//
// 11/04/2023 :36:05

import { SliderControllerDelegate } from "../../tools/Delegates";

class Controller implements SliderControllerDelegate {
  control(): any {
     const el = {
       skip: document.getElementById('skip-slider'),
       finish: document.getElementById('finish-slider'),
       next: document.getElementById('next-slide'),
       prev: document.getElementById('prev-slide')
     }

     return el;
  }
  
  public prev(): void {
    const $ = this.control();

    $.prev!.addEventListener('click', ():void => {
      console.log('clicked');
    });
  }
  
  public next(): void {
    const $ = this.control();

    $.next!.addEventListener('click', (): void => {
      console.log('clicked');
    });
  }

  public skip(): void {
    const $ = this.control(); 

    $.skip!.addEventListener('click', (): void => {
      console.log('clicked');
    });
  }

  public finish(): void {
    const $ = this.control();

    $.finish!.addEventListener('click', (): void => {
      console.log('clicked');
    });
  }
}

export const SliderControl: Controller = new Controller();


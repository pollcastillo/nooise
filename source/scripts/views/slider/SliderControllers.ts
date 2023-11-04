// @filename: SliderContoller.ts 
//
// 11/04/2023 :36:05

import { SliderControllerDelegate } from "../../tools/Delegates";
import { skipSlider } from "./SkipSlider.js";

class Controller implements SliderControllerDelegate {
  private readonly content = {
    f: '<h2>Selecciona tus sonidos preferidos</h2><p>Crea tu ambiente personalizado, ajustando el volúmen del sonido y la dirección en la que se escucha.</p>',
    s: '<h2>Crea tus playlists personalizadas</h2><p>Guarda los ajustes y los sonidos de tu preferencia para tenerlos a la mano en todo momento.</p>',
    t: '<h2>Web, Mac, iOS, Windows, Android, Linux…</h2><p>Disfruta de nooise en cualquiera de tus dispositivos de preferencia.</p>'
  }

  private sliderIndex: number = 0;
  private sliderLimit: number = 2;

  control(): any {
     const el = {
       skip: document.getElementById('skip-slider'),
       finish: document.getElementById('finish-slider'),
       next: document.getElementById('next-slide'),
       prev: document.getElementById('prev-slide'),
       content: document.getElementById('slider-content'),
       indicators: document.getElementsByClassName('slide_indicator')
     }

     return el;
  }
  
  public prev(): void {
    const $ = this.control();

    $.prev!.addEventListener('click', ():void => {
      if (this.sliderIndex > 0) {
        this.sliderIndex--;

        if (this.sliderIndex === 1) {
          $.content.innerHTML = this.content.s;
          $.next!.classList.remove('is--hidden');
          $.finish!.classList.add('is--hidden');
          console.log(this.sliderIndex);
          $.indicators![this.sliderIndex + 1].classList.remove('is--active');
          $.indicators![this.sliderIndex].classList.add('is--active');
        } else {
          $.content.innerHTML = this.content.f;
          $.prev!.classList.add('is--hidden');
          $.skip!.classList.remove('is--hidden');
          console.log(this.sliderIndex);
          $.indicators![this.sliderIndex + 1].classList.remove('is--active');
          $.indicators![this.sliderIndex].classList.add('is--active');
        }
      }
    });
  }
  
  public next(): void {
    const $ = this.control();

    $.next!.addEventListener('click', (): void => {
      if (this.sliderIndex < this.sliderLimit) {
        this.sliderIndex++;

        if (this.sliderIndex === 1) {
          $.content!.innerHTML = this.content.s;
          $.skip!.classList.add('is--hidden');
          $.prev!.classList.remove('is--hidden');
          $.indicators![this.sliderIndex - 1].classList.remove('is--active');
          $.indicators![this.sliderIndex].classList.add('is--active');
        } else if (this.sliderIndex === 2) {
          $.content!.innerHTML = this.content.t;
          $.next!.classList.add('is--hidden');
          $.finish!.classList.remove('is--hidden');
          $.indicators![this.sliderIndex - 1].classList.remove('is--active');
          $.indicators![this.sliderIndex].classList.add('is--active');
        }
      }
    });
  }

  public skip(): void {
    const $ = this.control(); 

    $.skip!.addEventListener('click', (): void => {
      skipSlider();
    });
  }

  public finish(): void {
    const $ = this.control();

    $.finish!.addEventListener('click', (): void => {
      skipSlider();
    });
  }
}

export const SliderControl: Controller = new Controller();


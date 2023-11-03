import { ViewDelegate } from "../../tools/Delegates";

/* @filename: SliderView.ts */ 
class View implements ViewDelegate {
  private readonly baseSliderConten: string = '<h2>Selecciona tus sonidos preferidos</h2><p>Crea tu ambiente personalizado, ajustando el volúmen del sonido y la dirección en la que se escucha.</p>';

  public render(): void {
    const root = document.getElementById('root');
    

    root!.innerHTML = '';

    root!.innerHTML = `
      <div class='view'>
        <div class='view__content'>
          <div class='view__container slider__container'>
            <div class='slider'>
              <div class='slider__group:navigation'>
                <div class='group-side:left'>
                  <button class='btn btn__slider'>Omitir</button>
                  <button class='btn btn__slider is--hidden'>Anterior</button>
                </div>

                <div class='group-side:left'>
                  <button class='btn btn__slider' id='next-slide'>Siguiente</button>
                  <button class='btn btn__slider is--hidden' id='finish-slider'>Empezar</button>
                </div>
              </div>

              <div class='slider__footer'>
                <div class='slider__content' id='slider-content'>
                  ${this.baseSliderConten}
                </div>

                <div class='slider__group:indicators'>
                  <ul>
                    <li class='slider__group:indicators__dot is--active'></li>
                    <li class='slider__group:indicators__dot'></li>
                    <li class='slider__group:indicators__dot'></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export const sliderView: View = new View()
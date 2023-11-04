// @filename: SliderContoller.ts 
//
// 11/04/2023 :36:05
class Controller {
    constructor() {
        this.content = {
            f: '<h2>Selecciona tus sonidos preferidos</h2><p>Crea tu ambiente personalizado, ajustando el volúmen del sonido y la dirección en la que se escucha.</p>',
            s: '<h2>Crea tus playlists personalizadas</h2><p>Guarda los ajustes y los sonidos de tu preferencia para tenerlos a la mano en todo momento.</p>',
            t: '<h2>Web, Mac, iOS, Windows, Android, Linux…</h2><p>Disfruta de nooise en cualquiera de tus dispositivos de preferencia.</p>'
        };
        this.sliderIndex = 0;
        this.sliderLimit = 2;
    }
    control() {
        const el = {
            skip: document.getElementById('skip-slider'),
            finish: document.getElementById('finish-slider'),
            next: document.getElementById('next-slide'),
            prev: document.getElementById('prev-slide'),
            content: document.getElementById('slider-content'),
            indicators: document.getElementsByClassName('slide_indicator')
        };
        return el;
    }
    prev() {
        const $ = this.control();
        $.prev.addEventListener('click', () => {
            console.log('clicked');
        });
    }
    next() {
        const $ = this.control();
        $.next.addEventListener('click', () => {
            if (this.sliderIndex < this.sliderLimit) {
                this.sliderIndex++;
                if (this.sliderIndex === 1) {
                    $.content.innerHTML = this.content.s;
                    $.skip.classList.add('is--hidden');
                    $.prev.classList.remove('is--hidden');
                    $.indicators[this.sliderIndex - 1].classList.remove('is--active');
                    $.indicators[this.sliderIndex].classList.add('is--active');
                }
                else if (this.sliderIndex === 2) {
                    $.content.innerHTML = this.content.t;
                    $.next.classList.add('is--hidden');
                    $.finish.classList.remove('is--hidden');
                    $.indicators[this.sliderIndex - 1].classList.remove('is--active');
                    $.indicators[this.sliderIndex].classList.add('is--active');
                }
            }
        });
    }
    skip() {
        const $ = this.control();
        $.skip.addEventListener('click', () => {
            console.log('clicked');
        });
    }
    finish() {
        const $ = this.control();
        $.finish.addEventListener('click', () => {
            console.log('clicked');
        });
    }
}
export const SliderControl = new Controller();

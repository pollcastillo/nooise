// @filename: SliderContoller.ts 
//
// 11/04/2023 :36:05
class Controller {
    control() {
        const el = {
            skip: document.getElementById('skip-slider'),
            finish: document.getElementById('finish-slider'),
            next: document.getElementById('next-slide'),
            prev: document.getElementById('prev-slide')
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
            console.log('clicked');
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

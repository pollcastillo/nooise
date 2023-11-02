export interface ViewDelegate {
    render(): void;
}

export interface ControllerDelegate {
    control(): void;
}

export interface SliderControlerDelegate {
    next(): void;
    prev(): void;
    skip() : void;
}
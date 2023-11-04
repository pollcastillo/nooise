export interface ViewDelegate {
    render(): void;
}

export interface ControllerDelegate {
  control(): void;
}

export interface SliderControllerDelegate {
  next(): void;
  prev(): void;
  skip(): void;
}

export interface ViewDelegate {
    render(): void;
}

export interface ControllerDelegate {
  control(): void;
}

export interface SliderControllerDelegate extends ControllerDelegate {
  control(): any;
  next(): void;
  prev(): void;
  skip(): void;
}

export interface InterfaceComponent {
  draw(): void;
}
export class ZoomableSlider {

    visibleRange: Array<number>;
    chosenRange: Array<number>;
    step: number;
    clipDragToVisible: boolean;
    changeCallbacks: Array<any>;
    element: HTMLElement;
    elCore: HTMLElement;
    elLeft: HTMLElement;
    elRight: HTMLElement;
    elStretch: HTMLElement;
    elInside: HTMLElement;
    elOutside: HTMLElement;
    elLabelVisibleLeft: HTMLElement;
    elLabelVisibleRight: HTMLElement;
    elLabelChosenLeft: HTMLElement;
    elLabelChosenRight: HTMLElement;
    

    constructor();

    setRange(range: Array<number>): void;

    setVisibleRange(range: Array<number>): void;

    update(): void;

    change(callback: Function): void;
}
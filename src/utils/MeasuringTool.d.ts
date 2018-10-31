import { EventDispatcher } from '../EventDispatcher';
import { Measure } from './Measure';

export class MeasuringTool extends EventDispatcher {

    viewer: any;
    renderer: any;
    scene: any;
    light: any;

    constructor(viewer: any);

    onSceneChange(e: Event): void;

    startInsertion(args: any): Measure;

    update(): void;

    render(): void;
}
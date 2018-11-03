import { EventDispatcher } from '../EventDispatcher';
import { PolygonClipVolume } from './PolygonClipVolume';

export class ClippingTool extends EventDispatcher {

    constructor(viewer: any);

    setScene(scene: any): void;

    startInsertion(args: any): PolygonClipVolume;

    update(): void;
}
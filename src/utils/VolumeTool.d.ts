import { EventDispatcher } from '../EventDispatcher';
import { Renderer } from '../PotreeRenderer';
import { BoxVolume } from './Volume';
import { Viewer } from '../viewer/Viewer';

export class VolumeTool extends EventDispatcher {

    viewer: Viewer;
    renderer: Renderer;
    scene: THREE.Scene;

    constructor(viewer: Viewer);

    onSceneChange(e: Event): void;

    startInsertion(args: any): BoxVolume;

    update(): void;

    /**
     * 
     * @param params 
     */
    render(params: {renderTarget: any}): void;
}
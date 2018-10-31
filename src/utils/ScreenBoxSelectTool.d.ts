import { EventDispatcher } from "../EventDispatcher";
import { BoxVolume } from './Volume';


export class ScreenBoxSelectTool extends EventDispatcher {
    
    viewer: any;
    scene: THREE.Scene;
    
    constructor(viewer: any);

    onSceneChange(scene: any): void;

    startInsertion(): BoxVolume;

    update(e: Event): void;

    render(): void;
}
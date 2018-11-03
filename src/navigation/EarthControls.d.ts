import { EventDispatcher } from "../EventDispatcher";
import THREE from '../node_modules/@types/three';

export class EarthControls extends EventDispatcher {
    
    viewer: any;
    renderer: any;
    scene: any;
    sceneControls: THREE.Scene;
    rotationSpeed: number;
    fadeFactor: number;
    wheelDelta: number;
    zoomDelta: THREE.Vector3;
    camStart: any;
    tweens: Array<any>;
    
    constructor(viewer: any); 

    setScene(scene: any): void;

    stop(): void;

    zoomToLocation(mouse: THREE.Vector3): void;

    update(delta: any): void;
}
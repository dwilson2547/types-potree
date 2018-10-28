import { EventDispatcher } from '../EventDispatcher';
import THREE from '../node_modules/@types/three';

export class OrbitControls extends EventDispatcher {

    viewer: any;
    renderer: any;
    scene: any;
    sceneControls: THREE.Scene;
    rotationSpeed: number;
    fadeFactor: number;
    yawDelta: number;
    pitchDelta: number;
    panDelta: THREE.Vector2;
    radiusDelta: number;
    tweens: Array<any>;

    constructor(viewer: any);

    setScene(scene: any): void;

    stop(): void;

    zoomToLocation(mouse: THREE.Vector3): void;

    stopTweens(): void;

    update(delta: any): void;
}
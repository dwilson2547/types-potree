import { EventDispatcher } from "../EventDispatcher";

export class FirstPersonControls extends EventDispatcher {

    viewer: any;
    renderer: any;
    scene: any;
    sceneControls: THREE.Scene;
    rotationSpeed: number;
    moveSpeed: number;
    lockElevation: boolean;
    keys: {
        FORWARD: Array<{a: number, b: number}>,
        BACKWARD: Array<{a: number, b: number}>,
        LEFT: Array<{a: number, b: number}>,
        RIGHT: Array<{a: number, b: number}>;
        UP: Array<{a: number, b: number}>;
        DOWN: Array<{a: number, b: number}>
    }
    fadeFactor: number;
    yawDelta: number;
    pitchDelta: number;
    translationDelta: THREE.Vector3;
    translationWorldDelta: THREE.Vector3;
    tweens: Array<any>

    constructor(viewer: any);

    setScene(scene: any): void;

    stop(): void;

    zoomToLocation(mouse: THREE.Vector3): void;

    update(delta: any): void;
}
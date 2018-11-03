import { EventDispatcher } from '../EventDispatcher';
import THREE from '../node_modules/@types/three';

export class DeviceOrientationControls extends EventDispatcher {

    viewer: any;
    renderer: any;
    scene: any;
    sceneControls: THREE.Scene;
    screenOrientation: number;

    constructor(viewer: any);

    setScene(scene: any): void;

    update(delta: any): THREE.Quaternion;
}
import THREE from '../node_modules/@types/three';
import { OrbitControls } from '../navigation/OrbitControls';

export class View {

    position: THREE.Vector3;
    yaw: number;
    _pitch: number;
    radius: number;
    maxPitch: number;
    minPitch: number;
    navigationMode: OrbitControls;

    constructor();

    clone(): View;

    pitch(angle: number): number;

    direction(): THREE.Vector3;

    lookAt(t: THREE.Vector3): void;

    getPivot(): THREE.Vector3;

    getSide(): THREE.Vector3;

    pan(x: number, y: number): void;

    translate(x: number, y: number, z: number): void;

    translateWorld(x: number, y: number, z: number);
}
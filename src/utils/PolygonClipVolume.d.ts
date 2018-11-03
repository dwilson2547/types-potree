import THREE from '../node_modules/@types/three';

export class PolygonClipVolume extends THREE.Object3D {
    
    name: string;
    camera: THREE.Camera;
    viewMatrix: THREE.Matrix4;
    projMatrix: THREE.Matrix4;
    markers: Array<THREE.Mesh>;
    initialized: boolean;

    constructor(camera: THREE.Camera);

    addMarker(): void;

    removeLastMarker(): void;
}
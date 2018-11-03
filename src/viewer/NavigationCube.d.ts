import THREE from "../node_modules/@types/three";
import { Viewer } from './viewer';

export class NavigationCube extends THREE.Object3D {

    viewer: Viewer;
    front: THREE.Mesh;
    back: THREE.Mesh;
    left: THREE.Mesh;
    right: THREE.Mesh;
    top: THREE.Mesh;
    bottom: THREE.Mesh;
    width: number;
    camera: THREE.Camera;

    constructor(viewer: Viewer);

    update(rotation: THREE.Euler)
}
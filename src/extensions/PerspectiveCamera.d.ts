import THREE from '../node_modules/@types/three';

export class PerspectiveCamera extends THREE.PerspectiveCamera {
    zoomTo(node: any, factor: any): void;
}
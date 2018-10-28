import THREE from '../node_modules/@types/three';

export class OrthographicCamera extends THREE.OrthographicCamera {
    zoomTo(node: any, factor: number): void;
}
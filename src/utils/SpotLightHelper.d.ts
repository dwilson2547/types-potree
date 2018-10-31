import THREE from '../node_modules/@types/three';

export class SpotLightHelper extends THREE.Object3D {

    light: any;
    color: THREE.Color;

    constructor(light: any, color: THREE.Color);

    update(): void;
}
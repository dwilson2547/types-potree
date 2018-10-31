import THREE from '../node_modules/@types/three';

export class ClipVolume extends THREE.Object3D {

    constructor(args: any);

    setClipOffset(offset: any): void;

    setClipRotOffset(offset: any): void;

    setScaleX(x: number): void;

    setScaleY(y: number): void;

    setScaleZ(z: number): void;

    offset(args: any): void;

    rotate(args: any): void;

    update(): void;

    updateLocalSystem(): void;

    raycast(raycaster: THREE.Raycaster, intersects: Array<any>): void;
}
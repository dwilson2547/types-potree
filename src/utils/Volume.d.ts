import THREE from '../node_modules/@types/three';
import { TextSprite } from '../TextSprite';

export class Volume extends THREE.Object3D {
    
    label: TextSprite;
    _clip: boolean;
    _visible: boolean;
    showVolumeLabel: boolean;
    _modifiable: boolean;
    
    constructor(args: any);

    getVolume(): number;

    update(): void;

    raycast(raycaster: THREE.Raycaster, intersects: Array<any>): void;

    clip(value: boolean): boolean;

    modifiable(value: boolean): boolean;
}

export class BoxVolume extends Volume {

    name: string;
    material: THREE.MeshBasicMaterial;
    box: THREE.Mesh;
    boundingBox: THREE.Box3;
    frame: THREE.LineSegments;

    constructor(args: any);
}

export class SphereVolume extends Volume {

    name: string;
    material: THREE.MeshBasicMaterial;
    box: THREE.Mesh;
    boundingBox: THREE.Box3;
    frame: THREE.LineSegments;

    constructor(args: any);
}
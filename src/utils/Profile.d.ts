import THREE from '../node_modules/@types/three';

export class Profile extends THREE.Object3D {

    name: string;
    points: Array<any>;
    spheres: Array<any>;
    edges: Array<any>;
    boxes: Array<any>;
    width: number;
    height: number;
    _modifiable: boolean;
    sphereGeometry: THREE.Sphere;
    color: THREE.Color;
    lineColor: THREE.Color;

    constructor();

    createSphereMaterial(): THREE.MeshLambertMaterial;

    getSegments(): Array<any>;

    getSegmentMatricies(): Array<THREE.Matrix4>;

    addMarker(point: any): void;

    removeMarker(index: number): void;

    setPosition(index: number, position: THREE.Vector3): void;

    setWidth(width: number): void;

    getWidth(): number;

    update(): void;

    raycast(raycaster: THREE.Raycaster, intersects: Array<any>): void;

    modifiable(value: boolean): boolean;
}
import THREE from '../node_modules/@types/three';

export class Measure extends THREE.Object3D {

    name: string;
    points: Array<any>;
    _showDistances: boolean;
    _showCoordinates: boolean;
    _showArea: boolean;
    _closed: boolean;
    _showAngles: boolean;
    _showHeight: boolean;
    maxMarkers: number;
    sphereGeometry: THREE.SphereGeometry;
    color: THREE.Color;
    lengthUnit: { code: string };
    spheres: Array<any>;
    edges: Array<any>;
    sphereLabels: Array<any>;
    edgeLabels: Array<any>;
    angleLabels: Array<any>;
    coordinateLabels: Array<any>;

    constructor();

    createSphereMaterial(): THREE.MeshLambertMaterial;

    addMarker(point: THREE.Vector3 | Array<THREE.Vector3>): void;

    removeMarker(index: number): void;

    setMarker(index: number, point: any): void;

    setPosition(index: number, position: any);

    getArea(): number;

    getTotalDistance(): number;

    getAngleBetweenLines(cornerPoint: any, point1: any, point2: any): number;

    getAngle(index: number): number;

    update(): void;

    raycast(raycaster: THREE.Raycaster, intersects: Array<any>): void;

    showCoordinates(value: boolean): boolean;

    showAngles(value: boolean): boolean;

    showHeight(value: boolean): boolean;

    showArea(value: boolean): boolean;

    closed(value: boolean): boolean;

    showDistances(value: boolean): boolean;
}
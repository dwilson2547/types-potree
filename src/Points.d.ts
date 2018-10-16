import * as THREE from 'three';

export class Points {

    boundingBox: THREE.Box3;
    numPoints: number;
    data: any;

    constructor();

    add(points): void;
}
import THREE from '../node_modules/@types/three';

export class Ray extends THREE.Ray {
    distanceToPlaneWithNegative(plane: any): number;
}
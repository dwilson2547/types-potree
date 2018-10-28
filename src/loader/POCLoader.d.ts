import THREE from '../node_modules/@types/three';

export class POCLoader {
    
    static load(url: string, callback: Function): void;

    loadPointAttributes(mno: any): any;

    createChildAABB(aabb: any, index: number): THREE.Box3;
}
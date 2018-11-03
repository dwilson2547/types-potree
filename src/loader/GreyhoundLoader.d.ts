import THREE from '../node_modules/@types/three';

declare class GreyhoundUtils {
    static getQueryParam(name: string): string;

    static createSchema(attributes: any): any;

    static fetch(url: string, cb: any): void;

    static fetchBinary(url: string, cb: any): void;

    static pointSizeFrom(schema: any): number;

    static getNormalization(serverURL: string, baseDepth: any, cb: any): void;
}

export class GreyhoundLoader {
    load(url: string, callback: Function): void;

    loadPointAttributes(mno: any): any;

    createChildAABB(aabb: any, childIndex: number): THREE.Box3;
}
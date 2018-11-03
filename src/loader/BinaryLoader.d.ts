export class BinaryLoader {

    version: string;
    boundingBox: THREE.Box3;
    scale: THREE.Vector3;

    constructor(version: string, boundingBox: THREE.Box3, scale: THREE.Vector3);

    load(node: any): void;

    parse(node: any, buffer: any): void;
}
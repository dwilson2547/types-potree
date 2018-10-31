import { EventDispatcher } from "../EventDispatcher";
import THREE from '../node_modules/@types/three';
import { PointAttributes } from '../loader/PointAttributes';

export class PointCloudArena4DGeometryNode {
    
    left: any;
    right: any;
    boundingBox: THREE.Box3;
    number: any;
    pcoGeometry: any;
    loaded: boolean;
    numPoints: number;
    level: number;
    children: Array<any>;
    oneTimeDisposeHandlers: Array<any>;
    
    constructor();

    isGeometryNode(): boolean;

    isTreeNode(): boolean;

    isLoaded(): boolean;

    getBoundingSphere(): THREE.Sphere;

    getBoundingBox(): THREE.Box3;

    getChildren(): Array<any>;

    getBoundingBox(): THREE.Box3;

    getLevel(): number;

    load(): void;

    dispose(): void;

    getNumPoints(): number;
}

export class PointCloudArena4DGeometry extends EventDispatcher {
    
    numPoints: number;
    version: number;
    boundingBox: THREE.Box3;
    numNodes: number;
    name: string;
    provider: any;
    url: string;
    root: any;
    levels: number;
    _spacing: any;
    pointAttributes: PointAttributes;
    
    constructor();

    static load(url: string, callback: Function);

    loadHierarchy(): void;

    spacing(value: any): any;
}
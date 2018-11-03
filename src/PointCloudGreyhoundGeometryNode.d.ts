import { PointCloudTreeNode } from "./PointCloudTree";

export class PointCloudGreyhoundGeometryNode extends PointCloudTreeNode {

    id: number;
    name: string;
    index: number;
    pcoGeometry: THREE.Geometry;
    geometry: THREE.Geometry;
    boundingBox: THREE.Box3;
    boundingSphere: THREE.Sphere;
    scale: number;
    offset: number;
    children: any;
    numPoints: number;
    level: number;
    loaded: boolean;
    oneTimeDisposeHandlers: Array<any>;
    baseLoaded: boolean;
    greyhoundBounds: any;
    greyhoundOffset: number;

    constructor(name: string, pcoGeometry: THREE.Geometry, boundingBox: THREE.Box3, scale: Array<number>, offset: number);

    isGeometryNode(): boolean;

    isTreeNode(): boolean;

    isLoaded(): boolean;

    getBoundingSphere(): any;

    getBoundingBox(): any;

    getLevel(): any;

    getChildren(): Array<any>;

    getURL(): string;

    addChild(child: any): void;

    load(): void;

    loadPoints(): void;

    loadHierarchyThenPoints(): any;

    getNumPoints(): number;

    dispose(): void;
}
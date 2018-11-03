import { PointCloudTreeNode } from './PointCloudTree';
import { XHRFactory } from './XHRFactory';
import { Utils } from './Utils';

export class PointCloudOctreeGeometry {
    url: string;
    octreeDir: string;
    spacing: number;
    boundingBox: any;
    root: any;
    nodes: Array<any>;
    pointAttributes: any;
    hierarchyStepSize: number;
    loader: any;

    constructor();
}

export class PointCloudOctreeGeometryNode extends PointCloudTreeNode {

    id: number;
    name: string;
    index: number;
    pcoGeometry: THREE.Geometry;
    geometry: THREE.Geometry;
    boundingBox: THREE.Box3;
    boundingSphere: THREE.Sphere;
    children: Array<any>;
    numPoints: number;
    level: number;
    loaded: boolean;
    oneTimeDisposeHandlers: Array<any>;

    constructor(name: string, pcoGeometry: THREE.Geometry, boundingBox: any);

    isGeometryNode(): boolean;

    getLevel(): number;

    isTreeNode(): boolean;

    isLoaded(): boolean;

    getBoundingSphere(): any;

    getBoundingBox(): any;

    getChildren(): any;

    getBoundingBox(): any;

    getURL(): string;

    getHierarchyPath(): string;

    addChild(child: any): void;

    load(): void;

    loadPoints(): void;

    loadHierarchyThenPoints(): void;

    getNumPoints(): number;

    dispose(): void;
}
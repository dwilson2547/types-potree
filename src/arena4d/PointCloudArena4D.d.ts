
import { PointCloudTreeNode, PointCloudTree } from '../PointCloudTree';

export class PointCloudArena4DNode extends PointCloudTreeNode {
    
    left: any;
    right: any;
    sceneNode: any;
    kdTree: any;
    
    constructor();

    getNumPoints(): number;

    isLoaded(): boolean;

    isTreeNode(): boolean;

    isGeometryNode(): boolean;

    getLevel(): number;

    getBoundingSphere(): THREE.Sphere;

    getBoundingBox(): THREE.Box3;

    toTreeNode(child: any): void;

    getChildren(): Array<any>;
}

export class PointCloudArena4D extends PointCloudTree {

    visiblePointsTarget: number;
    minimumNodePixelSize: number;
    position: THREE.Vector3;
    numVisibleNodes: number;
    numVisiblePoints: number;
    boundingBoxNodes: Array<any>;
    loadQueue: Array<any>;
    visibleNodes: Array<any>;
    pcoGeometry: THREE.Geometry;
    boundingBox: THREE.Box3;
    boundingSphere: THREE.Sphere;
    material: THREE.PointCloudMaterial;
    profileRequests: Array<any>;
    name: string;

    constructor(geometry: THREE.Geometry);

    getBoundingBoxWorld(): any;

    setName(name: string): void;

    getName(): string;

    getLevel(): number;

    toTreeNode(geometryNode: any, parent: any): any;

    updateMaterial(material: any, visibleNodes: Array<any>, camera: THREE.Camera, renderer: THREE.Renderer): void;

    updateVisibleBounds(): void;

    hideDescendents(object: any): void;

    updateMatrixWorld(force: boolean): void;

    nodesOnRay(nodes: Array<any>, ray: THREE.Ray): Array<any>;

    pick(viewer: any, camera: THREE.Camera, ray: THREE.Ray, params: any): any;

    computeVisibilityTextureData(nodes: Array<any>): {data: any, offsets: any};

    progress(): number;
}
import { PointCloudTree, PointCloudTreeNode } from './PointCloudTree';
import { PointCloudOctreeGeometryNode } from './PointCloudOctreeGeometry';
import { Utils } from './Utils';
import { PointCloudMaterial } from './materials/PointCloudMaterial';
import THREE, { WebGLRenderer } from './node_modules/@types/three';
import { ProfileRequest } from './ProfileRequest';

export class PointCloudOctreeNode extends PointCloudTreeNode {

    children: Array<any>;
    sceneNode: any;
    octree: any;

    constructor();

    getNumPoints(): number;

    isLoaded(): boolean;

    isTreeNode(): boolean;

    isGeometryNode(): boolean;

    getLevel(): number;

    getBoundingSphere(): any;

    getBoundingBox(): any;

    getChildren(): Array<any>;

    getPointsInBox(boxNode: any): Array<THREE.Vector3>;

    name(): string;
}

export class PointCloudOctree extends PointCloudTree {
    
    pointBudget: number;
    pcoGeometry: THREE.Geometry;
    boundingBox: THREE.Box3;
    boundingSphere: THREE.Sphere;
    material: THREE.Material;
    visiblePointsTarget: number;
    minimumNodePixelSize: number;
    level: number;
    position: THREE.Vector3;
    showBoundingBox: boolean;
    boundingBoxNodes: Array<any>;
    loadQueue: Array<any>;
    visibleBounds: THREE.Box3;
    visibleNodes: Array<any>;
    visibleGeometry: Array<any>;
    generateDEM: boolean;
    profileRequests: Array<any>;
    name: string;
    _visible: boolean;
    root: any;
    projection: THREE.Vector3;

    constructor(geometry: THREE.Geometry, material: THREE.Material);

    setName(name: string): void;

    getName(): string;

    toTreeNode(geometryNode: any, parent: any): PointCloudOctreeNode;

    updateVisibleBounds(): void;

    updateMaterial(material: THREE.Material, visibleNodes: Array<any>, camera: THREE.Camera, renderer: WebGLRenderer): void;

    computeVisibilityTextureData(nodes: Array<any>, camera: THREE.Camera): {data: any, offsets: any};

    nodeIntersectsProfile(node: any, profile: any): boolean;

    nodesOnRay(nodes: Array<any>, ray: any): Array<any>;

    updateMatrixWorld(force: boolean): void;

    hideDescendents(object: any): void;

    moveToOrigin(): void;

    moveToGroundPlane(): void;

    getBoundingBoxWorld(): THREE.Box3;

    /**
	 * returns points inside the profile points
	 *
	 * maxDepth:		search points up to the given octree depth
	 *
	 *
	 * The return value is an array with all segments of the profile path
	 *  let segment = {
	 * 		start: 	THREE.Vector3,
	 * 		end: 	THREE.Vector3,
	 * 		points: {}
	 * 		project: function()
	 *  };
	 *
	 * The project() function inside each segment can be used to transform
	 * that segments point coordinates to line up along the x-axis.
	 *
	 *
	 */
    getPointsInProfile(profile: any, maxDepth: number, callback: Function): ProfileRequest;

    /**
	 * returns points inside the given profile bounds.
	 *
	 * start:
	 * end:
	 * width:
	 * depth:		search points up to the given octree depth
	 * callback:	if specified, points are loaded before searching
	 *
	 *
	 */
    getProfile(start: any, end: any, width: number, depth: number, callback: Function): void;

    getVisibleExtend(): THREE.Vector3;

    /**
	 *
	 *
	 *
	 * params.pickWindowSize:	Look for points inside a pixel window of this size.
	 * 							Use odd values: 1, 3, 5, ...
	 *
	 *
	 * TODO: only draw pixels that are actually read with readPixels().
	 *
	 */
    pick(viewer: Viewer, camera: THREE.Camera, ray: THREE.Vector3, params: any): void;

    getFittedBoxGen(boxNode: any): THREE.Object3D;

    getFittedBox(boxNode: any, maxLevel?: number): THREE.Object3D;

    progress(): number;

    find(name: string): any;
}
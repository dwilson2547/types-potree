import { PointCloudMaterial } from '../materials/PointCloudMaterial';
import THREE from '../node_modules/@types/three';
import  { EventDispatcher } from '../EventDispatcher';
import { Viewer } from './viewer';

declare class ProfilePointCloudEntry {
    
    points: Array<any>;
    material: PointCloudMaterial;
    sceneNode: THREE.Object3D;
    
    constructor();

    static releaseMaterialInstance(instance: any): void;

    static getMaterialInstance(): PointCloudMaterial;

    dispose(): void;

    addPoints(data: any): void;
}

export class ProfileWindow extends EventDispatcher {

    viewer: Viewer;
    elRoot: HTMLElement;
    renderArea: HTMLElement;
    svg: any;
    mouseIsDown: boolean;
    projectedBox: THREE.Box3;
    pointclouds: Map<any, any>;
    numPoints: number;
    lastAddPointsTimestamp: any;
    mouse: THREE.Vector2;
    scale: THREE.Vector3;

    constructor(viewer: Viewer);
}

export class ProfileWindowController {

    viewer: Viewer;
    profileWindow: any;
    profile: any;
    numPoints: number;
    threshold: number;
    scheduledRecomputeime: any;
    enabled: boolean;
    requests: Array<any>;

    constructor(viewer: Viewer);

    setProfile(profile: any): void;

    reset(): void;

    progressHandler(pointcloud: any, progress: any): void;

    cancel(): void;

    finishLevelThenCancel(): void;

    recompute(): void;
}
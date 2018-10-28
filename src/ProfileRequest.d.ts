import { Points } from './Points';
import { BinaryHeap } from './libs/others/BinaryHeap';

export class ProfileData {

    profile: any;
    segments: Array<any>;
    boundingBox: THREE.Box3;

    constructor(profile: any);

    size(): number;
}

export class ProfileRequest {
    pointcloud: any;
    profile: any;
    maxDepth: number;
    callback: Function;
    temporaryResult: ProfileData;
    pointsServed: number;
    highestLevelServed: number;
    priorityQueue: BinaryHeap;

    constructor(pointcloud: any, profile: any, maxDepth: number, callback: Function);

    initialize(): void;

    // traverse the node and add intersecting descendants to queue
    traverse(node: any): void;

    update(): void;

    updateGenerator(): boolean;

    getAccepted(numPoints: number, node: any, matrix: THREE.Matrix4, segment: any, segmentDir: any, points: any, totalMileage: any): Array<any>;

    getPointsInsideProfile(nodes: Array<any>, target: any): boolean;

    finishLevelThenCancel(): void;

    cancel(): number;
}
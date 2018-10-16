import { EventDispatcher } from "./EventDispatcher";
import THREE from "./node_modules/@types/three";

export class PointCloudTreeNode extends EventDispatcher {

    needsTransformUpdate: boolean;

    constructor();

    /**
     * throws error stating method must be overwritten
     */
    getChildren(): void;

    /**
     * throws error stating method must be overwritten
     */
    getBoundingBox(): void;

    /**
     * throws error stating method must be overwritten
     */
    isLoaded(): void;

    /**
     * throws error stating method must be overwritten
     */
    isGeometryNode(): void;

    /**
     * throws error stating method must be overwritten
     */
    isTreeNode(): void;

     /**
     * throws error stating method must be overwritten
     */
    getLevel(): void;

     /**
     * throws error stating method must be overwritten
     */
    getBoundingSphere(): void;
}

export class PointCloudTree extends THREE.Object3D {
    constructor();

    initialized(): boolean;
}
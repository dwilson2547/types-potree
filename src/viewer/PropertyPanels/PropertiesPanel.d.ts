import { Viewer } from '../viewer';
import THREE from '../../node_modules/@types/three';

export class PropertiesPanel {

    container: any;
    viewer: Viewer;
    object: any;
    cleanupTasks: Array<any>;
    scene: THREE.Scene;

    constructor(container: any, viewer: Viewer);

    setScene(scene: THREE.Scene): void;

    set(object): void;

    /**
     * Used for events that should be removed when the property object changes.
     * This is for listening to materials, scene, point clouds, etc.
     * not required for DOM listeners, since they are automatically cleared by removing the DOM subtree.
     */
    addVolatileListener(target: any, type: string, callback: Function): void;

    setPointCloud(pointcloud: THREE.PointCloud): void;

    setMeasurement(object: any): void;

    setCamera(camera: THREE.Camera): void;
}
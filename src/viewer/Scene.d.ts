import { EventDispatcher } from "../EventDispatcher";
import { Annotation } from '../Annotation';
import { OrbitControls } from '../navigation/OrbitControls';
import { GeoControls } from '../navigation/GeoControls';
import { DeviceOrientationControls } from '../navigation/DeviceOrientationControls';
import { InputHandler } from '../navigation/InputHandler';
import { View } from './View';
import { Volume } from '../utils/Volume';
import { PolygonClipVolume } from '../utils/PolygonClipVolume';
import { Measure } from '../utils/Measure';
import { Profile } from '../utils/Profile';

export class Scene extends EventDispatcher {

    annotations: Array<Annotation>;
    scene: THREE.Scene;
    sceneBG: THREE.Scene;
    scenePointCloud: THREE.Scene;
    cameraP: THREE.PerspectiveCamera;
    cameraO: THREE.OrthographicCamera;
    cameraBG: THREE.Camera;
    cameraScreenSpace: THREE.OrthographicCamera;
    cameraMode: number;
    pointclouds: Array<any>;
    measurements: Array<any>;
    profiles: Array<any>;
    volumes: Array<any>;
    polygonClipVolumes: Array<any>;
    fpControls: any;
    orbitControls: OrbitControls
    earthControls: any;
    geoControls: GeoControls;
    deviceControls: DeviceOrientationControls;
    inputHandler: InputHandler;
    view: View;
    directionalLight: THREE.DirectionalLight;

    constructor();

    estimateHeightAt(position: THREE.Vector3): number;

    getBoundingBox(pointclouds: Array<any>): THREE.Box3;

    addPointCloud(pointcloud: any): void;

    addVolume(volume: Volume): any;

    removeVolume(volume: Volume): void;

    addPolygonClipVolume(volume: PolygonClipVolume): void;

    removePolygonClipVolume(volume: PolygonClipVolume): void;

    addMeasurement(measurement: Measure): void;
    
    removeMeasure(measurement: Measure): void;

    addProfile(profile: Profile): void;

    removeProfile(profile: Profile): void;

    removeAllMeasurements(): void;

    removeAllClipVolumes(): void;

    getActiveCamera(): THREE.Camera;

    initialize(): void;

    addAnnotation(position: THREE.Vector3 | Array<number>, args: any): void;

    getAnnotations(): Array<Annotation>;

    removeAnnotation(annotationToRemove: Annotation): void;
}
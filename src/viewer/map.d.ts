import { Viewer } from './viewer';
import ol from '../node_modules/@types/openlayers';

export class MapView {

    viewer: Viewer;
    webMapService: string;
    mapProjectionName: string;
    mapProjection: string;
    sceneProjection: string;
    extentsLayer: ol.layer.Vector;
    toolLayer: ol.layer.Vector;
    sourcesLayer: ol.layer.Vector;
    sourcesLabelLayer: ol.layer.Vector;
    enabled: boolean;
    annotationsLayer: ol.layer.Vector;
    cameraLayer: ol.layer.Vector;

    constructor(viewer: Viewer);

    showSources(show: boolean): void;

    init(): void;

    setScene(scene: THREE.Scene): void;

    getExtentsLayer(): ol.layer.Vector;

    getAnnotationsLayer(): ol.layer.Vector;

    getCameraLayer(): ol.layer.Vector;

    getToolLayer(): ol.layer.Vector;

    getSourcesLayer(): ol.layer.Vector;

    getSourcesLabelLayer(): ol.layer.Vector;

    setSceneProjection(sceneProjection: string): void;

    getmapExtend(): {bottomLeft: number, botomRight: number, topRight: number, topLeft: number}; 

    getMapCenter(): Array<number>;

    updateToolDrawings(): void;

    load(pointcloud: THREE.PointCloud): void;

    /**
     * Shows or hides the map by setting the css property 'display' to block or none
     */
    toggle(): void;

    update(delta: any): void;

    sourcesVisible(value: boolean): boolean;
}
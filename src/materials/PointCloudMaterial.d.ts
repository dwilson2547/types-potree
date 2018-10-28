import THREE from '../node_modules/@types/three';
import { Gradients } from './Gradients';
import { PointSizeType, PointShape, PointColorType } from '../defines';

export class PointCloudMaterial extends THREE.RawShaderMaterial {
    
    visibleNodesTexture: THREE.DataTexture;
    _pointSizeType: PointSizeType['FIXED'];
    _shape: PointShape['SQUARE'];
    _pointColorType: PointColorType['RGB'];
    _useClipBox: boolean;
    clipBoxes: Array<any>;
    clipPolygons: Array<any>;
    _weighted: boolean;
    _gradient: any;
    gradientTexture: THREE.CanvasTexture;
    lights: boolean;
    fog: boolean;
    _treeType: any;
    _useEDL: boolean;
    _snapEnabled: boolean;
    _numSnapshots: number;
    defines: Map<any, any>;
    _defaultIntensityRangeChanged: boolean;
    _defaultElevationRangeChanged: boolean;
    attributes: any;
    uniforms: any;
    _classification: any;
    vertexShader: any;
    fragmentShader: any;
    vertexColors: any;
    defaultAttributeValues: {
        normal: Array<number>,
        classification: Array<number>,
        indicies: Array<number>
    }
    
    constructor(parameters: any);

    soDefine(key: any, value: any): void;

    removeDefine(key: any): void;

    updateShaderSource(): void;

    getDefines(): Array<string>;

    setClipBoxes(clipBoxes: any): void;

    setClipPolygons(clipPolygons: any, maxPolygonVerticies: any): void;

    gradient(value: any): any;

    useOrthographicCamera(value: boolean): boolean;

    classification(value: string): string;

    recomputeClassification(): void;

    numSnapshots(value: number): number;

    snapEnabled(value: boolean): boolean;

    spacing(value: number): number;

    useClipBox(value: boolean): boolean;

    clipTask(mode: number): number;

    clipMethod(mode: number): number;

    weighted(value: boolean): boolean;

    fov(value: number): number;

    screedWidth(value: number): number;

    screenHeight(value: number): number;

    near(value: any): any;

    far(value: any): any;

    pointColorType(value: number): number;

    pointSizeType(value: number): number;

    useEDL(value: boolean): boolean;

    color(value: string): string;

    shape(value: number): number;

    treeType(value: number): number;

    bbSize(value: number): number;

    size(value: number): number;

    elevationRange(value: any): any;

    heightMin(value: any): any;

    heightMax(value: any): any;

    transition(value: any): any;

    intensityRange(value: Array<any>): Array<any>;

    intensityGamma(value: any): any;

    intensityContrast(value: any): any;

    intensityBrightness(value: any): any;

    rgbGamma(value: any): any;

    rgbContrast(value: any): any;

    rgbBrightness(value: any): any;

    weightRGB(value: any): any;

    weightIntensity(value: any): any;

    weightElevation(value: any): any;

    weightClassification(value: any): any;

    weightReturnNumber(value: any): any;

    weightSourceID(value: any): any;

    static GenerateGradientTexture(gradient: any): THREE.CanvasTexture;

    static generateClassificationTexture(classification: any): THREE.CanvasTexture;

    disableEvents(): void;

    enableEvents(): void;

    copyFrom(from: any): void;
}
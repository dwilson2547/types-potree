import { EventDispatcher } from "../EventDispatcher";
import { ClipMethod, ClipTask } from '../defines';
import { PotreeRenderer } from './PotreeRenderer';
import { Renderer } from '../PotreeRenderer';
import { Scene } from "./Scene";
import { InputHandler } from "../navigation/InputHandler";
import { EDLRenderer } from './EDLRenderer';
import { ClippingTool } from '../utils/ClippingTool';
import { TransformationTool } from '../utils/TransformationTool';
import { NavigationCube } from './NavigationCube';
import { Message } from '../utils/Message';

export class Viewer extends EventDispatcher {

    renderArea: HTMLElement;
    guiLoaded: boolean;
    guiLoadTasks: Array<any>;
    messages: Array<any>;
    elMessages: HTMLElement;
    pointCloudLoadedCallback: Function;
    server: any;
    fov: number;
    isFlipYZ: boolean;
    useDEMCollisions: boolean;
    generateDEM: boolean;
    minNodeSize: number;
    edlStrength: number;
    edlRadius: number;
    useEDL: boolean;
    classifications: {
        0: { visible: true, name: 'never classified' },
        1: { visible: true, name: 'unclassified' },
        2: { visible: true, name: 'ground' },
        3: { visible: true, name: 'low vegetation' },
        4: { visible: true, name: 'medium vegetation' },
        5: { visible: true, name: 'high vegetation' },
        6: { visible: true, name: 'building' },
        7: { visible: true, name: 'low point(noise)' },
        8: { visible: true, name: 'key-point' },
        9: { visible: true, name: 'water' },
        12: { visible: true, name: 'overlap' }
    };
    moveSpeed: 10;
    LENGTH_UNITS: {
        METER: { code: 'm' },
        FEET: { code: 'ft' },
        INCH: { code: '\u2033' }
    };
    lengthUnit: number;
    showBoundingBox: boolean;
    showAnnotations: boolean;
    freeze: boolean;
    clipTask: ClipTask;
    clipMethod: ClipMethod;
    filterReturnNumberRange: Array<number>;
    filterNumberOfReturnsRange: Array<number>;
    filterGPSTimeRange: Array<number>;
    filterGPSTimeExtent: Array<number>;
    potreeRenderer: PotreeRenderer;
    edlRenderer: EDLRenderer;
    renderer: THREE.Renderer;
    pRenderer: Renderer;
    scene: Scene;
    overlay: THREE.Scene;
    overlayCamera: THREE.OrthographicCamera;
    inputHandler: InputHandler;
    clippingTool: ClippingTool;
    transformationTool: TransformationTool;
    navigationCube: NavigationCube;
    skybox: {camera: THREE.PerspectiveCamera, scene: THREE.Scene};
    clock: THREE.Clock;
    background: any;
    defaultGPSTimeChanged: boolean;

    constructor(domElement: HTMLElement, args: any);

    onCrash(error: Error): void;

    setScene(scene: Scene): void;

    getControls(navigationMode: EventDispatcher): EventDispatcher;

    getMinNodeSize(): number;

    setMinNodeSize(value: number): void;

    getBackground(): any;

    setBackground(bg: any): void;

    setDescription(value: string): void;

    setNavigationMode(value: number): void;

    setShowBoundingBox(value: boolean): void;

    getShowBoundingBox(): boolean;

    setMoveSpeed(value: number): void;

    getMoveSpeed(): number;

    setWeightClassification(w: any): void;

    setFreeze(value: boolean): void;

    getFreeze(): boolean;

    getClipTask(): ClipTask;

    getClipMethod(): ClipMethod;
    
    setClipTask(value: ClipTask): void;

    setClipMethod(value: ClipMethod): void;

    setPointBudget(value: number): void;

    getPointBudget(): number;

    setShowAnnotations(value: boolean): void;

    getShowAnnotations(): void;

    setDEMCollisionsEnabled(value): void;

    getDEMCollisionsEnabled(): boolean;

    setEDLEnabled(value: boolean);

    getEDLEnabled(): boolean;

    setEDLRadius(value: number): void;

    getEDLRadius(): number;

    setEDLStrength(value: number): void;

    getEDLStrength(): number;

    setFOV(value: number): void;

    getFOV(): number;

    disableAnnotations(): void;

    enableAnnotations(): void;

    setClassificationVisibility(key: any, value: any): void;

    setFilterReturnNumberRange(from: any, to: any): void;

    setFilterNumberOfReturnsRange(from: any, to: any): void;

    setFilterGPSTimeRange(from: any, to: any): void;
    
    setFilterGPSTimeExtent(from: any, to: any): void;

    setLengthUnit(value: any): void;

    zoomTo(node: any, factor: any, animationDuration: number): void;

    showAbout(): void;

    getBoundingBox(pointclouds: any): any;

    fitToScreen(factor: number, animationDuration: number): void;

    toggleNavigationCube(): boolean;

    setView(view: any): void;

    setTopView(): void;

    setBottomView(): void;

    setFrontView(): void;

    setBackView(): void;

    setLeftView(): void;

    setRightView(): void;

    flipYZ(): void;

    setCameraMode(mode: number): void;

    loadSettingsFromURL(): void;

    createControls(): void;

    toggleSidebar(): void;

    toggleMap(): void;

    onGUILoaded(callback: Function): void;

    loadGUI(callback: Function): void;

    setLanguage(lang: any): void;

    setServer(server: any): void;

    initThree(): void | boolean;

    updateAnnotations(): void;

    update(delta: any, timestamp: number): void;

    render(): void;

    resolveTimings(timestamp: number): void;

    loop(timestamp: number): void;

    postError(content: string, params: any): HTMLElement;

    postMessage(content: string, params: any): Message;
}
import { Viewer } from './viewer';
import { PointCloudSM } from '../utils/PointCloudSM';
import { EyeDomeLightingMaterial } from '../materials/EyeDomeLightingMaterial';

export class EDLRenderer {

    viewer: Viewer;
    edlMaterial: EyeDomeLightingMaterial;
    rtRegular: THREE.WebGLRenderTarget;
    rtEDL: THREE.WebGLRenderTarget;
    gl: HTMLElement;
    shadowMap: PointCloudSM

    constructor(viewer: Viewer);

    initEDL(): void;

    resize(): void;

    makeScreenshot(camera: THREE.Camera, size: { width: number, height: number }, callback: Function): { width: number, height: number, buffer: Uint8Array };

    render(): void;
}
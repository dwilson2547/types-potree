import THREE from '../node_modules/@types/three';
import { Viewer } from './viewer';
import { NormalizationEDLMaterial } from '../materials/NormalizationEDLMaterial';
import { NormalizationMaterial } from '../materials/NormalizationMaterial';

export class HQSplatRenderer {

    viewer: Viewer;
    depthMaterials: Map<any, any>;
    attributeMaterials: Map<any, any>;
    normalizationMaterial: NormalizationMaterial;
    normalizationEDLMaterial: NormalizationEDLMaterial;
    rtDepth: THREE.WebGLRenderTarget;
    rtAttribute: THREE.WebGLRenderTarget
    gl: HTMLElement;
    initialized: boolean;

    constructor(viewer: Viewer);

    init(): void;

    resize(): void;

    render(): void;
}
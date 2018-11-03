import THREE from '../node_modules/@types/three';

export class NormalizationEDLMaterial extends THREE.RawShaderMaterial {
    
    _neighborCount: number;
    
    constructor(parameters: any);

    getDefines(): string;

    updateShaderSource(): void;

    neighborCount(value?: number): number;
}
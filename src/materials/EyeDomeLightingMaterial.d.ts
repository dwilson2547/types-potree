import THREE from '../node_modules/@types/three';

export class EyeDomeLightingMaterial extends THREE.ShaderMaterial {
    
    uniforms: any;
    _neighborCount: number;

    constructor(parameters: any);

    getDefines(): string;

    updateShaderSource(): void;

    neighborCount(value: number): number;
}
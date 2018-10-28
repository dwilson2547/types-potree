import THREE from '../node_modules/@types/three';

export class NormalizationMaterial extends THREE.RawShaderMaterial {

    constructor(parameters: any);

    getDefines(): string;

    updateShaderCount(): void;
}
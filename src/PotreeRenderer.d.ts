import THREE from './node_modules/@types/three';

declare function paramThreeToGL(_gl, p);

declare class Shader {

    gl: any;
    name: string;
    vsSource: any;
    fsSource: any;
    cache: Map<any, any>;
    vs: any;
    fs: any;
    program: any;
    uniformLocations: any;
    attributeLocations: any;
    uniformBlockIndices: any;
    uniformBlocks: any;
    uniforms: any;

    constructor(gl: any, name: string, vsSource: any, fsSource: any);

    update(vsSource: any, fsSource: any): void;

    compileShader(shader: any, source: any): void;

    linkProgram(): void;

    setUniformMatrix4(name: string, value: THREE.Matrix4): void;

    setUniform1f(name: string, value: number): void;

    setUniformBoolean(name: string, value: boolean): void;

    setUniformTexture(name: string, value: WebGLTexture): void;

    setUniform2f(name: string, value: Array<any>): void;

    setUniform3f(name: string, value: Array<any>): void;

    setUniform(name: string, value: any): void;

    setUniformBoolean(name: string, value: any): void;

    setUniform1i(name: string, value: any): void;
}

declare class WebGLTexture {

    gl: any;
    texture: any;
    id: any;
    target: any;
    version: number;

    constructor(gl: any, texture: any);

    update(): void;
}

declare class WebGLBuffer {

    numElements: number;
    vao: any;
    vbos: Map<any, any>;

    constructor();
}

export class Renderer {

    threeRenderer: THREE.Renderer;
    gl: any;
    buffers: Map<any, any>;
    shaders: Map<any, any>;
    textures: Map<any, any>;
    glTypeMapping: Map<any, any>;
    toggle: number;

    constructor(threeRenderer: THREE.Renderer);

    createBuffer(geometry: THREE.Geometry): WebGLBuffer;

    updateBuffer(geometry: THREE.Geometry): void;

    traverse(scene: any): {octrees: Array<any>};

    renderNodes(octree: any, nodes: Array<any>, visibilityTextureData: any, camera: THREE.Camera, target: any, shader: any, params: any): void;

    renderOctree(octree: any, nodes: Array<any>, camera: THREE.Camera, target: any, params: any): void;

    renderer(scene: any, camera: THREE.Camera, target: any, params: any): void;

}
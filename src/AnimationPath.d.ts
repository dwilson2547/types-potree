import THREE from "./node_modules/@types/three";

export class PathAnimation {

    path: any;
    length: number;
    speed: number;
    callback: Function;
    tween: any;;
    startPoint: number;
    endPoint: number;
    t: number;

    constructor(path: any, start: number, end: number, speed: number, callback: Function);

    start(resume: boolean): void;

    stop(): void;

    pause(): void;
}

export class AnimationPath {

    spline: THREE.CatmullRomCurve3;
    tween: any;
    points: Array<THREE.Vector3>;

    constructor(points: Array<THREE.Vector3>);

    get(t: any): THREE.Vector3;

    getLength(): number;

    animate (start: any, end: any, speed: number, callback: Function): PathAnimation;

    pause(): void;

    resume(): void;

    getGeometry(): THREE.Geometry;

    closed(value?: boolean): void;
}
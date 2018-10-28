import { EventDispatcher } from '../EventDispatcher';
import THREE from '../node_modules/@types/three';

export class GeoControls extends EventDispatcher {

    object: any;
    domElement: HTMLElement;
    enabled: boolean;
    track: THREE.SplineCurve;
    trackPos: number;
    rotateSpeed: number;
    moveSpeed: number;

    constructor(object: any, domElement: HTMLElement);

    setTrack(track: any): void;

    setTrackPos(trackPos: any, _preserveRelativeRotation: any): void;

    stop(): void;

    getTrackPos(): any;

    rotateLeft(angle: number): void;

    rotateUp(angle: number): void;

    panLeft(distance: number): void;

    panUp(distance: number): void;

    panForward(distance: number): void;

    pan(deltaX: number, deltaY: number): void;

    update(delta: any): void;

    reset(): void;

    onMouseDown(): void;

    onMouseMove(event: MouseEvent): void;

    onMouseUp(event: MouseEvent): void;

    onMouseWheel(event: MouseEvent): void;

    setMoveSpeed(value: number): void;

    onKeyDown(event: KeyboardEvent): void;

    onKeyUp(event: KeyboardEvent): void;
}
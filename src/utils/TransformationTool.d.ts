import { Viewer } from "../viewer/viewer";
import THREE from '../node_modules/@types/three';

export class TransformationTool {

    viewer: Viewer;
    scene: THREE.Scene;
    selection: Array<any>;
    pivot: THREE.Vector3;
    dragging: boolean;
    showPickVolumes: boolean;
    activeHandle: any;
    scaleHandles: {
        scale: {
            'x+': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'x-': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'y+': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'y-': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'z+': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'z-': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            }
        }
    };
    focusHandles: {
        focus: {
            'x+': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'x-': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'y+': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'y-': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'z+': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'z-': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            }
        }
    };
    translationHandles: {
        translation: {
            'x': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'y': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'z': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            }
        }
    };
    rotationHandles: {
        rotation: {
            'x': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'y': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            },
            'z': {
                name: string, node: THREE.Object3D, color: string, alignment: Array<number>
            }
        }
    };
    handles: any;
    pickVolumes: Array<any>;
    frame: THREE.LineSegments;

    constructor(viewer: Viewer);

    initializeScaleHandles(): void;

    initializeFocusHandles(): void;

    initializeTranslationHandles(): void;

    initializeRotationHandles(): void;

    dragRotationHandle(e: Event): void;

    dropRotationHandle(e: Event): void;

    dragTranslationHandle(e: Event): void;

    dropTranslationHandle(e: Event): void;

    dragScaleHandle(e: Event): void;

    dropScaneHandle(e: Event): void;

    setActiveHandle(handle: any): void;

    update(): void;
}
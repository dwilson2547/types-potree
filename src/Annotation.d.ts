import { EventDispatcher } from "./EventDispatcher";
import THREE from "./node_modules/@types/three";
import { Viewer } from './viewer/viewer';

export class Annotation extends EventDispatcher {
    
    scene: any;
    _title: string;
    _description: string;
    offset: THREE.Vector3;
    position: THREE.Vector3;
    cameraPosition: THREE.Vector3;
    radius: number;
    view: any;
    keepOpen: boolean;
    descriptionVisible: boolean;
    showDescription: boolean;
    actions: Array<any>
    isHighlighted: boolean;
    _visible: boolean;
    __visible: boolean;
    _display: boolean;
    _expand: boolean;
    collapseThreshold: Array<number>;
    children: Array<any>;
    parent: any;
    boundingBox: THREE.Box3;
    iconClose: string;
    domElement: string;
    elTitlebar: HTMLElement;
    elTitle: HTMLElement;
    elDescription: HTMLElement;
    elDescriptionClose: HTMLElement;

    constructor(args: any);

    /**
     * if a is null or undefigned, returns b otherwise returns a
     * @param a 
     * @param b 
     */
    valueOrDefault(a: any, b: any): any;

    clickTitle(): void;

    installHandles(viewer: Viewer): void;

    removeHandles(viewer: Viewer): void;

    visible(value?: boolean): void | boolean;

    display(value?: boolean): void | boolean;

    expand(value?: boolean): void | boolean;

    title(value?: boolean): void | boolean;

    description(value?: boolean): void | boolean;

    addEventListener(annotation: any): void;

    level(): number;

    hasChild(annotation: any): boolean;

    removeEventListener(annotation: any): void;

    removeAllChildren(): void;

    updateBounds(): void;

    traverse(handler: any): void;

    traverseDescendants(handler: any): void;

    flatten(): Array<any>;

    descendants(): Array<any>;

    setHighlighted(highlighted: boolean): void;

    hasView(): boolean;

    moveHere(camera?: THREE.Camera): void;

    dispose(): void;

    toString(): string;
}
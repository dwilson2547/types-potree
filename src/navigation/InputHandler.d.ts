import { EventDispatcher } from "../EventDispatcher";

export class InputHandler extends EventDispatcher {

    viewer: any;
    renderer: any;
    domElement: HTMLElement;
    enabled: boolean;
    scene: any;
    interactiveScenes: Array<any>;
    interactiveObjects: Set<any>;
    inputListeners: Array<any>;
    blacklist: Set<any>;
    drag: any;
    mouse: THREE.Vector2;
    selection: Array<any>;
    hoveredElements: Array<any>;
    pressedKeys: any;
    wheelDelta: number;
    speed: number;
    logMessages: boolean;

    constructor(viewer: any);

    getSortedListeners(): Array<EventListener>;

    onTouchStart(e: Event): void;

    onTouchEnd(e: Event): void;

    onTouchMove(e: Event): void;

    onKeyDown(e: Event): void;

    onKeyUp(e: Event): void;

    onDoubleClick(e: Event): void;

    onMouseClick(e: Event): void;

    onMouseDown(e: Event): void;

    onMouseUp(e: Event): void;

    onMouseMove(e: Event): void;

    onMouseWheel(e: Event): void;

    startDragging(object: any, args: any): void;

    getMousePointCloudIntersection(mouse: THREE.Vector2): {location: THREE.Vector3, distance: number, pointCloud: any, point: any} | null;

    toggleSelection(object: any): void;

    deselect(object: any): void;

    deselectAll(): void;

    isSelected(object: any): boolean;

    registerInteractiveObject(object: any): void;

    removeInteractiveObject(object: any): void;

    registerInteractiveScene(scene: any): void;

    unregisterInteractiveScene(scene: any): void;

    getHoveredElement(): any;

    getHoveredElements(): Array<any>;

    setScene(scene: any): void;

    update(delta: any): void;

    getNormalizedDrag(): {x: number, y: number};

    getNormalizedLastDrag(): {x: number, y: number};
}
import { Viewer } from './viewer';

declare class RepSnapshot {

    target: any;
    camera: any;

    constructor();
}

declare class RepRenderer {

    viewer: Viewer;
    edlMaterial: Array<any>;
    attributeMaterials: Array<any>;
    rtColor: any;
    gl: HTMLElement;
    snapshotRequested: boolean;
    disableSnapshots: boolean;
    snap: {target: any, matrix: any};
    history: {maxSnapshots: number, snapshots: Array<any>, version: number};

    constructor(viewer: Viewer);

    initEDL(): void;

    resize(): void;

    makeSnapshot(): void;

    render(): void;
}
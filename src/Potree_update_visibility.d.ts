import THREE from './node_modules/@types/three';

export function updatePointClouds(pointclouds: any, camera: THREE.Camera, renderer: THREE.Renderer): {
    visibleNodes: any,
    numVisiblePoints: any,
    lowestSpacing: any
};

export function updateVisibilityStructures(pointclouds: Array<any>, camera: THREE.Camera, renderer: THREE.Renderer): {frustrums: any, camObjPositions: any, priorityQueue: any};

export function updateVisibility(pointclouds: Array<any>, camera: THREE.Camera, renderer: THREE.Renderer): {
    visibleNodes: any,
    numVisiblePoints: any,
    lowestSpacing: any
};
import THREE from './node_modules/@types/three';

export class Utils {

    screenScene: THREE.Scene;
    screenQuad: THREE.Mesh;
    camera: THREE.Camera;

    loadShapefileFeatures(file, callback: Function): void;

    static toString(value: THREE.Vector3 | any): string;

    static normalizeURL(url: string): string;

    static pathExists(url: string): boolean;

    static debugSphere(parent: any, position: THREE.Vector3, scale: number, color: THREE.Color): void;

    static debugSphere(parent: any, position: THREE.Vector3, scale: number, color: THREE.Color): void;

    static debugLine(parent: any, start: THREE.Vector3, end: THREE.Vector3, color: THREE.Color): void;

    static debugBox(parent: any, box: THREE.Box3, transform: THREE.Matrix4, color: THREE.Color): void;

    static debugPlane(parent: any, plane: THREE.Plane, size: number, color: THREE.Color): void;

    static computeTransformedBoundingBox(box: THREE.Box3, transform: THREE.Matrix4): THREE.Box3;

    /**
     * Add separators to large numbers
     * @param nStr
     */
    static addCommas(nStr: string): string;

    /**
     * Remove separators from large numbers
     * @param str
     */
    static removeCommas(str: string): string;

    /**
     * Creates worker from a string
     * @param code
     */
    static createWorker(code: string): Worker;

    static moveTo(scene: Scene, endPosition: THREE.Vector3, endTarget: any): void;

    static loadSkybox(path: string): {camera: THREE.Camera, scene: Scene};

    static createGrid(width: number, length: number, spacing: number, color: THREE.Color): THREE.LineSegments;

    static createBackgroundTexture(width: number, height: number): THREE.DataTexture;

    static getMousePointCloudIntersection (mouse: THREE.Vector3, camera:THREE.Camera, viewer: Viewer, pointclouds: Array<PointCloud>, params: any): {location: THREE.Vector3, distance: number, pointCloud: PointCloud, point: Point} | null;

    static pixelsArrayToImage(pixels: pixels, width: number, height: number): HTMLImageElement;

    static pixelsArrayToDataUrl(pixels: pixels, width: number, height: number): string;

    static pixelsArrayToCanvas(pixels: pixels, width: number, height: number): HTMLCanvasElement;

    static removeListeners(dispatcher: any, type: string): void;

    static mouseToRay(mouse: THREE.Vector3, camera: THREE.Camera, width: number, height: number): THREE.Ray;

    static projectedRadius(radius: number, camera: THREE.Camera, distance: number, screenWidth: number, screenHeight: number): number;

    static projectedRadiusPerspective(radius: number, fov: number, distance: number, screenHeight: number): number;

    static projectedRadiusOrtho(radius: number, proj: THREE.Matrix4, screenWidth: number, screenHeight: number): number;

    static topView(camera: THREE.Camera, node: any): void;

    static frontView(camera: THREE.Camera, node: any): void;

    static leftView(camera: THREE.Camera, node: any): void;

    static rightView(camera: THREE.Camera, node: any): void;

    /**
	 *
	 * 0: no intersection
	 * 1: intersection
	 * 2: fully inside
	 */
    static frustumSphereIntersection(frustum: THREE.Frustum, sphere: THREE.Sphere): number;

    /**
     * code taken from three.js
     * ImageUtils - generateDataTexture()
     */
    static generateDataTexture(width: number, height: number, color: THREE.Color): THREE.DataTexture;

    static getParameterByName(name: string): string | null;

    static setParameter(name: string, value: string): void;

    static createChildAABB(aabb: any, index: number): THREE.Box3;

    // see https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    static clipboardCopy(text: string): void;

    static getMeasurementIcon(measurement: Measure): string;

    static toMaterialID(materialName: string): number;

    static toMaterialName(materialID: number): string;

    screenPass(): void;

    render(renderer: renderer, material: THREE.Material, target: any);
}
import THREE from '../node_modules/@types/three';
import { Renderer } from '../PotreeRenderer';

export class PointCloudSM {

    potreeRenderer: Renderer;
    threeRenderer: THREE.Renderer;
    target: THREE.WebGLRenderTarget;

    setLight(light: any): void;

    setSize(width: number, height: number): void;

    render(scene: any, camera: THREE.Camera):void;
}
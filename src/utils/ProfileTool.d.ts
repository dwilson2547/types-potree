import { EventDispatcher } from '../EventDispatcher';
import { Viewer } from '../viewer/Viewer';
import { Renderer } from '../PotreeRenderer';
import { Profile } from './Profile';

export class ProfileTool extends EventDispatcher {
    
    viewer: Viewer;
    renderer: Renderer;
    scene: any;
    light: THREE.PointLight;

    constructor(viewer: Viewer);

    onSceneChange(e: Event): void;

    startInsertion(args: any): Profile;

    update(): void;

    render(): void;
}
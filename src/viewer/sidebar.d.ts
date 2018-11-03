import { Viewer } from './viewer';
import { MeasuringTool } from '../utils/MeasuringTool';
import { ProfileTool } from '../utils/ProfileTool';
import { VolumeTool } from '../utils/VolumeTool';

export class Sidebar {

    viewer: Viewer;
    measuringTool: MeasuringTool;
    profileTool: ProfileTool;
    volumeTool: VolumeTool;

    constructor(viewer: Viewer);

    createToolIcon(icon: string, title: string, callback: Function): HTMLElement;

    init(): void;

    initToolbar(): void;

    initScene(): void;

    initClippingTool(): void;

    initFilters(): void;

    initReturnFilters(): void;

    initGPSTimeFilters(): void;

    initClassificationList(): void;

    initAccordion(): void;

    initAppearance(): void;

    initNavigation(): void;

    initSettings(): void;
}
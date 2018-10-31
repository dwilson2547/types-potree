import { MeasurePanel } from './MeasurePanel';
import { PropertiesPanel } from './PropertiesPanel';
import { Viewer } from '../viewer';

export class AnglePanel extends MeasurePanel {

    elContent: HTMLElement;
    elDownloadButton: HTMLElement;
    elCopyRotation: HTMLElement;
    elCopyScale: HTMLElement;
    elRemove: HTMLElement;
    elCheckClip: HTMLElement;
    elCheckShow: HTMLElement;

    constructor(viewer: Viewer, measurement: any, propertiesPanel: PropertiesPanel);

    download(): Promise<any>;
}
import { MeasurePanel } from './MeasurePanel';
import { PropertiesPanel } from './PropertiesPanel';
import { Viewer } from '../viewer';

export class ProfilePanel extends MeasurePanel {

    elContent: HTMLElement;
    elRemove: HTMLElement;
    elDownloadButton: HTMLElement;

    constructor(viewer: Viewer, measurement: any, propertiesPanel: PropertiesPanel);

    download(): Promise<any>;
}
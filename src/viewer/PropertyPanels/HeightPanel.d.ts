import { MeasurePanel } from './MeasurePanel';
import { PropertiesPanel } from './PropertiesPanel';
import { Viewer } from '../viewer';

export class HeightPanel extends MeasurePanel {

    elContent: HTMLElement;
    elRemove: HTMLElement;

    constructor(viewer: Viewer, measurement: any, propertiesPanel: PropertiesPanel);
}
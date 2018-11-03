import { MeasurePanel } from './MeasurePanel';
import { PropertiesPanel } from './PropertiesPanel';
import { Viewer } from '../viewer';

export class PointPanel extends MeasurePanel {

    elContent: HTMLElement;
    elRemove: HTMLElement;

    constructor(viewer: Viewer, measurement: any, propertiesPanel: PropertiesPanel);
}
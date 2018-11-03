import { MeasurePanel } from './MeasurePanel';
import { PropertiesPanel } from './PropertiesPanel';
import { Viewer } from '../viewer';

export class DistancePanel extends MeasurePanel {

    elContent: HTMLElement;
    elRemove: HTMLElement;

    constructor(viewer: Viewer, measurement: any, propertiesPanel: PropertiesPanel);
}
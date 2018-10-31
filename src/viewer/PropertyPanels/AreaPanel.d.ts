import { MeasurePanel } from './MeasurePanel';
import { PropertiesPanel } from './PropertiesPanel';
import { Viewer } from '../viewer';

export class AreaPanel extends MeasurePanel {

    elContent: HTMLElement;

    constructor(viewer: Viewer, measurement: any, propertiesPanel: PropertiesPanel);
}
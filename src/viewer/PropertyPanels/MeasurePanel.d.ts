import { Viewer } from '../viewer';
import { PropertiesPanel } from './PropertiesPanel';

export class MeasurePanel {

    viewer: Viewer;
    measurement: any;
    elCopy: any;
    propertiesPanel: PropertiesPanel;

    constructor(viewer: Viewer, measurement: any, propertiesPanel: PropertiesPanel);

    getCoordinatesTable(points: any): HTMLElement;

    createAttributesTable(): HTMLElement;

    update(): void;
}
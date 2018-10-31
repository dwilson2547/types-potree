import { MeasurePanel } from './MeasurePanel';
import { PropertiesPanel } from './PropertiesPanel';
import { Viewer } from '../viewer';

export class CameraPanel extends MeasurePanel {

    elContent: HTMLElement;
    elCopyPosition: HTMLElement;
    elCopyTarget: HTMLElement;

    constructor(viewer: Viewer, propertiesPanel: PropertiesPanel);
}
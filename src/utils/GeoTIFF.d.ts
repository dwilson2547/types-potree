import { Enum } from '../Enum';

export const Tag: Enum;

export const Type: Enum;

export class IFDEntry {

    tag: Enum;
    type: Enum;
    count: number;
    offset: any;
    value: any;

    constructor(tag: Enum, type: Enum, count: number, offset: any, value: any);
}

export class Image {

    width: number;
    height: number;
    buffer: any;
    metadata: Array<any>;

    constructor();
}

export class Reader {
    
    constructor();

    static read(delta: any): Image;
}

export class Exporter {
    
    constructor();

    static toTiffBuffer(image: Image, params: any);
}
export class InterleavedBufferAttribute {

    name: string;
    bytes: number;
    numElements: number;
    normalized: boolean;
    type: string;

    constructor(name: string, bytes: number, numElements: number, type: string, normalized: boolean);
}
export class InterleavedBuffer {

    data: any;
    attributres: any;
    stride: number;
    numElements: number;

    constructor(data: any, attributes: any, numElements: number);

    offset(name: string): number | null;
}
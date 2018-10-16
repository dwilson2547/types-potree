export class BitReader {
    
    buffer: Uint32Array;
    bitOffset: number;

    constructor(buf: number);

    read(bits: number): any;
}
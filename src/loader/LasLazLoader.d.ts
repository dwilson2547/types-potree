export class LasLazLoader {
    
    version: string;

    constructor(version: string);

    static progressCB(): void;

    load(node: any): void;

    parse(node: any, buffer: any): any;

    handle(node: any, url: string): void;
}

export class LasLazBatcher {

    node: any;

    constructor(node: any);

    push(lasBuffer: any): void;
}
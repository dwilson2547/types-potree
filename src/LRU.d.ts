export class LRUItem {
    
    previous: any;
    next: any;
    node: any;

    constructor(node: any);
}

export class LRU {
    
    first: any;
    last: any;
    items: Array<any>;
    elements: number;
    numPoints: number;

    constructor();

    size(): number;

    constains(node: any): boolean;

    touch(node: any): void;

    remove(node: any): void;

    getLRUItem(): any;

    toString(): string;

    freeMemory(): void;

    disposeDescendants(node: any): void;
}
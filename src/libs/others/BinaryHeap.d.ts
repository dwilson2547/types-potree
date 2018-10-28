export class BinaryHeap {

    content: Array<any>;
    scoreFunction: any;

    constructor(scoreFunction: any);

    push(element: any): void;

    pop(): any;

    remove(node: any): void;

    size(): number;

    bubbleUp(n: number): void;

    sinkDown(n: number): void;
}
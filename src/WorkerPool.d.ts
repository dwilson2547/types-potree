export class WorkerPool {

    workers: Array<any>;

    constructor();
    
    getWorker(url: string): any;

    returnWorker(url: string, worker: any): void;
}
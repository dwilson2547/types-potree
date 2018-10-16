import { EventDispatcher } from "./EventDispatcher";


export class Action extends EventDispatcher {
    constructor(args: any);

    onclick(event: Event): void;

    pairWith(object: any): void;

    setIcon(newIcon: any): void;
}
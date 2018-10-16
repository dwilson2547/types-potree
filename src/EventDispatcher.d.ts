export class EventDispatcher {

    _listeners: Map<string, Array<EventListener>>;

    constructor();

    addEventListener(type: string, listener: EventListener): void;

    hasEventListener(type: string, listener: EventListener): boolean;

    removeEventListener(type: string, listener: EventListener): void;

    dispatchEvent(event: Event): void;
}
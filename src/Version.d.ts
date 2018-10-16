export class Version {
    constructor(version: string);

    newerThan(version: string): boolean;

    equalOrHigher(version: string): boolean;

    upTo(version: string): boolean;
}
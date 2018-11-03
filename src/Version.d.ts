export class Version {

    version: string;
    versionMajor: string;
    versionMinor: string;

    constructor(version: string);

    newerThan(version: string): boolean;

    equalOrHigher(version: string): boolean;

    upTo(version: string): boolean;
}
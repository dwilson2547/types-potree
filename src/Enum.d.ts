export class EnumItem {
    
    constructor(object: Object);

    inspect(): string;
}

export class Enum {

    constructor(object: Object);

    fromValue(value: any);
}
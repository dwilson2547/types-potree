export const PointAttributeNames: {
    POSITION_CARTESIAN: number,
    COLOR_PACKED: number,
    COLOR_FLOATS_1: number,
    COLOR_FLOATS_255: number,
    NORMAL_FLOATS: number,
    FILLER: number,
    INTENSITY: number,
    CLASSIFICATION: number,
    NORMAL_SPHEREMAPPED: number,
    NORMAL_OCT16: number,
    NORMAL: number,
    RETURN_NUMBER: number,
    NUMBER_OF_RETURNS: number,
    SOURCE_ID: number,
    INDICES: number,
    SPACING: number,
    GPS_TIME: number
}

declare const PointAttributeTypes: {
	DATA_TYPE_DOUBLE: {ordinal: 0, size: 8},
	DATA_TYPE_FLOAT: {ordinal: 1, size: 4},
	DATA_TYPE_INT8: {ordinal: 2, size: 1},
	DATA_TYPE_UINT8: {ordinal: 3, size: 1},
	DATA_TYPE_INT16: {ordinal: 4, size: 2},
	DATA_TYPE_UINT16: {ordinal: 5, size: 2},
	DATA_TYPE_INT32: {ordinal: 6, size: 4},
	DATA_TYPE_UINT32: {ordinal: 7, size: 4},
	DATA_TYPE_INT64: {ordinal: 8, size: 8},
	DATA_TYPE_UINT64: {ordinal: 9, size: 8}
};

declare class PointAttribute {

    name: string;
    type: any;
    numElements: number;
    byteSize: number;

    constructor(name, type, numElements);
}

export class PointAttributes {

    constructor(pointAttributes: Array<PointAttribute>);

    add(pointAttribute: PointAttribute): void;

    hasColors(): boolean;

    hasNormals(): boolean;
}
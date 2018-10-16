export class CameraMode {
	ORTHOGRAPHIC: number;
	PERSPECTIVE: number;
}

export class ClipTask {
	NONE: number;
	HIGHLIGHT: number;
	SHOW_INSIDE: number;
	SHOW_OUTSIDE: number;
}

export class ClipMethod {
	INSIDE_ANY: number;
	INSIDE_ALL: number;
}

export class MOUSE {
	LEFT: number;
	RIGHT: number;
	MIDDLE: number;
}

export class PointSizeType {
	FIXED: number;
	ATTENUATED: number;
	ADAPTIVE: number;
}

export class PointShape {
	SQUARE: number;
	CIRCLE: number;
	PARABOLOID: number;
}

export class PointColorType {
	RGB: number;
	COLOR: number;
	DEPTH: number;
	HEIGHT: number;
	ELEVATION: number;
	INTENSITY: number;
	INTENSITY_GRADIENT:	number;
	LOD: number;
	LEVEL_OF_DETAIL: number;
	POINT_INDEX: number;
	CLASSIFICATION: number;
	RETURN_NUMBER: number;
	SOURCE: number;
	NORMAL: number;
	PHONG: number;
	RGB_HEIGHT: number;
	GPS_TIME: number;
	COMPOSITE: number;
}

export class TreeType {
	OCTREE:	number;
	KDTREE:	number;
}
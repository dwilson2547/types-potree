import { PointAttributes } from '../loader/PointAttributes';

export function CustomView(buffer: ArrayBuffer): Uint8Array;

export function decompress(schema: any, input: any, numPoints: number): ArrayBuffer;

export function onmessage(event: {data: { buffer: ArrayBuffer, schema: any, offset: any, scale: any, version: any, pointAttributes: PointAttributes, normalize: { color: any }}}): void;
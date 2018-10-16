import THREE from "./node_modules/@types/three";

export class TextSprite extends THREE.Object3D {
    constructor(text: string);

    setText(text: string): void;

    setTextColor(color: string): void;

    setBorderColor(color: string): void;

    setBackgroundColor(color: string): void;
    
    update(): void;

    roundRect(ctx: any, x: number, y: number, w: number, h: number, r: number): void;
}
export abstract class AbstractShape {
    public abstract draw() : void
    public abstract fill(color : string) : void
}

export class Circle implements AbstractShape {
    x : number;
    y : number;
    r : number;

    constructor(x : number, y : number, r : number) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    draw() : void {
        console.log(`Drawing circle from (${this.x}, ${this.y}) with radius ${this.r}`);
    }

    fill(color : string) : void {
        console.log(`Filling the circle with color ${color}`);
    }
}

export class Square implements AbstractShape {
    x : number;
    y : number;
    l : number;

    constructor(x : number, y : number, l : number) {
        this.x = x;
        this.y = y;
        this.l = l;
    }

    draw() : void {
        console.log(`Drawing a square from (${this.x}, ${this.y}) to (${this.x+this.l}, ${this.y+this.l})`);
    }

    fill(color : string) : void {
        console.log(`Filling the square with color ${color}`);
    }
}
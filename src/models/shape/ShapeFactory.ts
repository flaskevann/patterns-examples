import IShape, { Circle, Square } from './Shape'

export default abstract class ShapeFactory {
    static drawCircle(x : number, y : number, radius : number, color : string) : IShape {
        const circle : IShape = new Circle(x, y, radius);
        circle.draw();
        if (color) circle.fill(color);

        return circle;
    }

    static drawSquare(x : number, y : number, length : number, color : string) : IShape {
        const square : IShape = new Square(x, y, length);
        square.draw();
        if (color) square.fill(color);

        return square;
    }
}
import IShape, { Circle, Square } from './Shape'
import ShapeFactory from "./ShapeFactory"

export default function run() {

    // .. some kind of client code before

    const circle : IShape = ShapeFactory.drawCircle(50, 50, 50, 'red')
    const square : IShape = ShapeFactory.drawSquare(100, 0, 100, 'blue')

    // .. some kind of client code after
}

import { AbstractShape, Circle, Square } from '../models/shapes/Shape'
import ShapeFactory from "../models/shapes/ShapeFactory"

export default function run() {

    // .. some kind of client code before

    const circle : AbstractShape = ShapeFactory.drawCircle(50, 50, 50, 'red')
    const square : AbstractShape = ShapeFactory.drawSquare(100, 0, 100, 'blue')

    // .. some kind of client code after
}

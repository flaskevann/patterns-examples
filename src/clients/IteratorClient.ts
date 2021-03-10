import IFlexibleIterator from "../models/generic/FlexibleIterator"
import { IContainer, Container } from "../models/generic/Container"

export default function run() {

    // .. some kind of client code before
    
    const container : IContainer<string> = new Container<string>(["text 1", "text 2", "text 3"])
    const iterator : IFlexibleIterator<string> = container.getIterator()
    
    console.log(iterator.current())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.previous())
        
    // .. some kind of client code after
}
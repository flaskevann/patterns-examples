import IFlexibleIterator from "./FlexibleIterator"

export interface IContainer<T> {
    add(element : T) : void
    remove(index : number) : void
    clear() : void
    getIterator() : IFlexibleIterator<T>
}

export class Container<T> implements IContainer<T> {
    private elements : T[] = new Array()

    public constructor(elements : T[]) {
        if (elements.length > 0)
            this.elements = JSON.parse(JSON.stringify(elements))
    }

    public add(element : T) {
        this.elements.push(JSON.parse(JSON.stringify(element)))
    }

    public remove(index : number) {

        if (index >= 0 && index < this.elements.length)
            this.elements.splice(index, 1)
    }

    public clear() {
        this.elements.length = 0
    }

    public getIterator() : IFlexibleIterator<T> {
        return new ContainerFlexibleIterator<T>(this.elements)
    }
}

export class ContainerFlexibleIterator<T> implements IFlexibleIterator<T> {
    private index : number = -1
    private elements : T[]

    public constructor(elements : T[]) {
        this.elements = elements

        if (this.elements.length > 0)
            this.index = 0
    }

    public hasPrevious() : boolean {
        return this.index !== 0
    }

    public previous() : T {
        if (!this.hasPrevious())
            return null

        this.index--
        return JSON.parse(JSON.stringify(this.elements[this.index]))
    }

    public current() : T {
        if (this.index === -1)
            return null

        return JSON.parse(JSON.stringify(this.elements[this.index]))
    }

    public hasNext() : boolean {
        return this.index+1 < this.elements.length
    }

    public next() : T {
        if (!this.hasNext())
            return null

        this.index++
        return JSON.parse(JSON.stringify(this.elements[this.index]))
    }
}
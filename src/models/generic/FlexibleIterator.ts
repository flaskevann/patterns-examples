export default interface IFlexibleIterator<T> {
    hasPrevious() : boolean
    previous() : T
    current() : T
    hasNext() : boolean
    next() : T
}

# patterns-examples

Simplified example implementations of common architectural- and design patterns (including principles like SOLID).

Chosen tools are Node with TypeScript etc. and Microsoft Office Visio with UML.

## History

When developing software I've always focused on its behavior and not given the structure much thought. Which of course has led to problems down the road when working on bigger projects with thousands of lines of code. Reading "Clean Architecture - A Craftsman’s Guide to Software Structure and Design" by Robert Cecil Martin, I realized this and decided to start trying to rectify the situation.

And soon after I started work on this project, which is probably going to be never ending.

## The Plan

Every commonly used pattern and principle is to be studied and learned by creating and documenting a working example implementation. This implementation can then easily be looked up again later if something suddenly becomes unclear. Sometimes an existing example may also need to be updated or improved upon if something is missing or just plain wrong. This is a work in progress after all.

I'm mostly doing this for myself, but anybody interested can use the examples and or contribute if they want to.

### Contents

Each implementation has to have at least one model, a UML diagram and some test execution code. Unit tests would also be nice. ;-)

#### Example

1. Look to the <code>Shape</code> model and the <code>ShapeClient</code>.
2. All of this source code can be printed to the console by executing <code>node run factory-and-facade.ts</code>.

### Patterns

List of pattern implementation examples so far:

- Facade (also spelled Façade)
- Factory
- Singleton
- Strategy (same as Policy pattern)
- Observer
- Builder
- Adapter

## License

Has a regular MIT license.

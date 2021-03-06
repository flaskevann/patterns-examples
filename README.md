
# patterns-examples

Simplified example implementations of common architectural- and design patterns (including principles like SOLID).

Chosen tools are Node with TypeScript etc. and Microsoft Office Visio with UML.

## History

When developing software I've always focused on its behavior and not given the structure much thought. Which of course has led to problems down the road when working on bigger projects with thousands of lines of code. Reading "Clean Architecture - A Craftsman’s Guide to Software Structure and Design" by Robert Cecil Martin, I realized this and decided to start trying to rectify the situation.

And soon after I started work on this project, which is probably going to be never ending.

## The Plan

Every commonly used pattern and principle is to be studied and learned by creating and documenting a working example implementation, if not too abstract. This implementation can then easily be looked up again later if something suddenly becomes unclear. Sometimes an existing example may also need to be updated or improved upon, if something is missing or just plain wrong.

I'm mostly doing this for myself, but anybody interested can use the examples and or contribute if they want to.

## Contents

Each implementation has to have at least one model, a UML diagram and some demo execution code.

### Example

1. Look to the <code>Shape</code> model and the <code>ShapeClient</code>.
2. All of this source code can be printed to the console by executing <code>node run factory-and-facade.ts</code>.

### Patterns

List of pattern implementation examples so far:

#### Structural

- Facade (also spelled Façade)
- Adapter
- Wrapper (also called Decorator)
- Proxy
- Bridge
- ~~Filter (also called Criteria~~ (impractical and it breaks SRP IMHO, skipped)
- Composite
- ~~Flyweight~~ (redundant pattern IMHO, skipped)

#### Creational

- Factory
- Singleton
- Builder
- Prototype

#### Behavioral

- Strategy (same as Policy pattern)
- Observer
- State
- Command
- Iterator
- Mediator
- Memento
- Null Object

### Principles

These principles are abstract (some more than others) ..

But all the concrete pattern examples *should* try and follow them.

#### SOLID (Its purpose: Keep up code maintainability)

- Single-Responsibility Principle (SRP) = "Gather together the things that change for the same reasons. Separate those things that change for different reasons."
- Open-Closed Principle (OCP) = "Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. Because it's better to add new needed functionality instead of changing existing relied upon code and cause breaking changes."
- Liskov Substitution Principle (LSP) = "Base types should be replaceable with its subtypes. Because new specialized behavior doesn't mean the class' basic nature should change."
- Interface Segregation Principle (ISP) = "Clients should not be forced to depend upon interfaces that they do not use. So split them up!”
- Dependency Inversion Principle (DIP) = "High level modules AND low level modules should BOTH depend on abstractions."

#### GRASP (Its purpose: Decide who should create stuff and what)

- Information expert (The Expert) = "Give the responsibility for creating something to the element that has most of the information about it."
- Creator = "B should create A if 1) B contains or compositely aggregate instances of A, or 2) instances of B record instances of A, or 3) instances of B closely use instances of A, or 4) instances of B have the initializing information for instances of A and passes it on creation."
- Controller = "To be able to continuously react to system events the program must have a control element (a controller) that delegates work. This object must also coordinate and control program execution flow. **The controller object is supposed to be an administrator. That means it should do zero grunt work itself.**"
- High cohesion = "Don't mix a lot of unrelated things together."
- Low coupling / Indirection = "Don't create components that directly depends on each other. Assign the responsibility of mediation between the components to intermediaries."
- Polymorphism = "If you are dealing with different types of something then use polymorphism. You create and define different types instead of using endless repetitive if/switch branching (which is also error-prone)."
- Protected variations = Essentially the same as OCP. It's all about protecting yourself from changes.
- Pure fabrication = "Sometimes low coupling and high cohesion can't be achieved directly when implementing a concept from the problem domain. This means you have to create supporting classes (pure fabrications) to succeed."

## License

Has a regular MIT license.

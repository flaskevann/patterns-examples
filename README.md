
# patterns-examples

Simplified example implementations of common architectural- and design patterns (including principles like SOLID).

Chosen tools are Node with TypeScript etc. and Microsoft Office Visio with UML.

## History

When developing software I've always focused on its behavior and not given the structure much thought. Which of course has led to problems down the road when working on bigger projects with thousands of lines of code. Reading "Clean Architecture - A Craftsman’s Guide to Software Structure and Design" by Robert Cecil Martin, I realized this and decided to start trying to rectify the situation.

Soon after I started work on this project, which is probably going to be never ending.

## The Plan

Every commonly used pattern and principle is to be studied and learned by creating and documenting a working example implementation. This implementation can then easily be looked up again later if something suddenly becomes unclear.

I'm mostly doing this for myself, but anybody interested can use the examples and or contribute if they want to.

### Contents

Each implementation has to have at least one model, a UML diagram, some test execution code and preferably also a unit test.

Look to the <code>Shape</code> model and <code>factory-and-facade.ts</code> test code for an example. Which prints out all the content to the console by executing <code>node run factory-and-facade.ts</code> when the project it set up.

## License

Has a regular MIT license.

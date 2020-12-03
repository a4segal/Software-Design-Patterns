# Software Design Patterns in Action

This projects contains the 23 Gang of Four (GoF) software design patterns implemented in JavaScript using ES6 classes and interactive examples written in React.

## List of Design Patterns Separed by Type

> In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.
>
> --- [Software design pattern. From Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Software_design_pattern)

### Creational Patterns

Creational patterns are ones that create objects for you, rather than having you instantiate objects directly. This gives your program more flexibility in deciding which objects need to be created for a given case.

- **Abstract factory:** provide an interface for creating families of related or dependent objects without specifying their concrete classes.
- **Builder:** separate the construction of a complex object from its representation, allowing the same construction process to create various representations.
- **Factory method:** define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
- **Prototype:** specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum.
- **Singleton:** ensure a class has only one instance, and provide a global point of access to it.

### Structural Patterns

These concern class and object composition. They use inheritance to compose interfaces and define ways to compose objects to obtain new functionality.

- **Adapter:** allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class.
- **Bridge:** decouples an abstraction from its implementation so that the two can vary independently.
- **Composite:** composes zero-or-more similar objects so that they can be manipulated as one object.
- **Decorator:** dynamically adds/overrides behaviour in an existing method of an object.
- **Facade:** provides a simplified interface to a large body of code.
- **Flyweight:** reduces the cost of creating and manipulating a large number of similar objects.
- **Proxy:** provides a placeholder for another object to control access, reduce cost, and reduce complexity.

### Behavioral Patterns

Most of these design patterns are specifically concerned with communication between objects.

- **Chain of responsibility:** delegates commands to a chain of processing objects.
- **Command:** creates objects which encapsulate actions and parameters.
- **Interpreter:** implements a specialized language.
- **Iterator:** accesses the elements of an object sequentially without exposing its underlying representation.
- **Mediator:** allows loose coupling between classes by being the only class that has detailed knowledge of their methods.
- **Memento:** provides the ability to restore an object to its previous state (undo).
- **Observer:** is a publish/subscribe pattern which allows a number of observer objects to see an event.
- **State:** allows an object to alter its behavior when its internal state changes.
- **Strategy:** allows one of a family of algorithms to be selected on-the-fly at runtime.
- **Template:** method defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior.
- **Visitor:** separates an algorithm from an object structure by moving the hierarchy of methods into one object.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

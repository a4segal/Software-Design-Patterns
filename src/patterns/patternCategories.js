/**
 * Categorised list of software design patterns.
 * @url https://en.wikipedia.org/wiki/Software_design_pattern
 * @const {Object[]} patternCategories - Contains pattern categories list.
 * @param {string} patternCategories[].id - The pattern category's ID.
 * @param {string} patternCategories[].title - The pattern category's title.
 * @param {string} patternCategories[].description - The pattern category's description.
 * @param {string} patternCategories[].link - The pattern category's link.
 * The list of design patterns within a specific category (ie class of patterns).
 * @param {Object[]} patternCategories[].patterns - List of design patterns in a category.
 * @param {string} patternCategories[].patterns[].id - The design pattern's ID.
 * @param {string} patternCategories[].patterns[].title - The design pattern's title.
 * @param {string} patternCategories[].patterns[].description - The design pattern's description.
 * @param {string} patternCategories[].patterns[].link - The design pattern's link.
 * @param {boolean} patternCategories[].patterns[].hasExample - Whether there is an example implementation or not.
 */
const patternCategories = [
  {
    id: "behavioral",
    title: "Behavioral Patterns",
    description:
      "Identify common communication patterns between objects and realize these patterns.",
    link: "https://en.wikipedia.org/wiki/Behavioral_pattern",
    patterns: [
      {
        id: "chainOfResponsibility",
        title: "Chain of responsibility",
        description:
          "Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.",
        link: "https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern",
        hasExample: true,
      },
      {
        id: "command",
        title: "Command",
        description:
          "Encapsulate a request as an object, thereby allowing for the parameterization of clients with different requests, and the queuing or logging of requests. It also allows for the support of undoable operations.",
        link: "https://en.wikipedia.org/wiki/Command_pattern",
        hasExample: true,
      },
      {
        id: "interpreter",
        title: "Interpreter",
        description:
          "Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.",
        link: "https://en.wikipedia.org/wiki/Interpreter_pattern",
      },
      {
        id: "iterator",
        title: "Iterator",
        description:
          "Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.",
        link: "https://en.wikipedia.org/wiki/Iterator_pattern",
        hasExample: true,
      },
      {
        id: "mediator",
        title: "Mediator",
        description:
          "Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it allows their interaction to vary independently.",
        link: "https://en.wikipedia.org/wiki/Mediator_pattern",
      },
      {
        id: "memento",
        title: "Memento",
        description:
          "Without violating encapsulation, capture and externalize an object's internal state allowing the object to be restored to this state later.",
        link: "https://en.wikipedia.org/wiki/Memento_pattern",
        hasExample: true,
      },
      {
        id: "observer",
        title: "Observer",
        description:
          "Define a one-to-many dependency between objects where a state change in one object results in all its dependents being notified and updated automatically.",
        link: "https://en.wikipedia.org/wiki/Observer_pattern",
        hasExample: true,
      },
      {
        id: "state",
        title: "State",
        description:
          "Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.",
        link: "https://en.wikipedia.org/wiki/State_pattern",
      },
      {
        id: "strategy",
        title: "Strategy",
        description:
          "Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.",
        link: "https://en.wikipedia.org/wiki/Strategy_pattern",
      },
      {
        id: "templateMethod",
        title: "Template method",
        description:
          "Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.",
        link: "https://en.wikipedia.org/wiki/Template_method_pattern",
      },
      {
        id: "visitor",
        title: "Visitor",
        description:
          "Represent an operation to be performed on the elements of an object structure. Visitor lets a new operation be defined without changing the classes of the elements on which it operates.",
        link: "https://en.wikipedia.org/wiki/Visitor_pattern",
      },
    ],
  },
  {
    id: "creational",
    title: "Creational Patterns",
    description:
      "Provide the capability to create objects based on a required criterion and in a controlled way.",
    link: "https://en.wikipedia.org/wiki/Creational_pattern",
    patterns: [
      {
        id: "abstractFactory",
        title: "Abstract Factory",
        description:
          "Provide an interface for creating families of related or dependent objects without specifying their concrete classes.",
        link: "https://en.wikipedia.org/wiki/Abstract_factory_pattern",
      },
      {
        id: "builder",
        title: "Builder",
        description:
          "Separate the construction of a complex object from its representation, allowing the same construction process to create various representations.",
        link: "https://en.wikipedia.org/wiki/Builder_pattern",
      },
      {
        id: "factoryMethod",
        title: "Factory method",
        description:
          "Define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.",
        link: "https://en.wikipedia.org/wiki/Factory_method_pattern",
      },
      {
        id: "prototype",
        title: "Prototype",
        description:
          "Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum.",
        link: "https://en.wikipedia.org/wiki/Prototype_pattern",
      },
      {
        id: "singleton",
        title: "Singleton",
        description:
          "Ensure a class has only one instance, and provide a global point of access to it.",
        link: "https://en.wikipedia.org/wiki/Singleton_pattern",
      },
    ],
  },
  {
    id: "structural",
    title: "Structural Patterns",
    description:
      "Organize different classes and objects to form larger structures and provide new functionality.",
    link: "https://en.wikipedia.org/wiki/Structural_pattern",
    patterns: [
      {
        id: "adapter",
        title: "Adapter",
        description:
          "Convert the interface of a class into another interface clients expect. An adapter lets classes work together that could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator.",
        link: "https://en.wikipedia.org/wiki/Adapter_pattern",
      },
      {
        id: "bridge",
        title: "Bridge",
        description:
          "Decouple an abstraction from its implementation allowing the two to vary independently.",
        link: "https://en.wikipedia.org/wiki/Bridge_pattern",
      },
      {
        id: "composite",
        title: "Composite",
        description:
          "Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.",
        link: "https://en.wikipedia.org/wiki/Composite_pattern",
      },
      {
        id: "decorator",
        title: "Decorator",
        description:
          "Attach additional responsibilities to an object dynamically keeping the same interface. Decorators provide a flexible alternative to subclassing for extending functionality.",
        link: "https://en.wikipedia.org/wiki/Decorator_pattern",
      },
      {
        id: "facade",
        title: "Facade",
        description:
          "Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.",
        link: "https://en.wikipedia.org/wiki/Facade_pattern",
      },
      {
        id: "flyweight",
        title: "Flyweight",
        description:
          "Use sharing to support large numbers of similar objects efficiently.",
        link: "https://en.wikipedia.org/wiki/Flyweight_pattern",
      },
      {
        id: "proxy",
        title: "Proxy",
        description:
          "Provide a surrogate or placeholder for another object to control access to it.",
        link: "https://en.wikipedia.org/wiki/Proxy_pattern",
      },
    ],
  },
];

// @todo: move to a separate library
const deepFreeze = (obj) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop]))
      deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};

deepFreeze(patternCategories);
export default patternCategories;

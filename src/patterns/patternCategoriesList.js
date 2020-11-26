/**
 * Categorised list of software design patterns.
 * @url https://en.wikipedia.org/wiki/Software_design_pattern
 * @const {Object[]} patternCategoryList - List of pattern categories.
 * @param {string} patternCategoryList[].id - The pattern category's ID.
 * @param {string} patternCategoryList[].title - The pattern category's title.
 * @param {string} patternCategoryList[].description - The pattern category's description.
 * @param {string} patternCategoryList[].link - The pattern category's link.
 * The list of design patterns within a specific category (ie class of patterns).
 * @param {Object[]} patternCategoryList[].patterns - List of design patterns.
 * @param {string} patternCategoryList[].patterns[].id - The design pattern's ID.
 * @param {string} patternCategoryList[].patterns[].title - The design pattern's title.
 * @param {string} patternCategoryList[].patterns[].description - The design pattern's description.
 * @param {string} patternCategoryList[].patterns[].link - The design pattern's link.
 * @param {boolean} patternCategoryList[].patterns[].hasExample - Whether there is an example implementation or not.
 */
const patternCategoryList = [
  {
    id: "behavioral",
    title: "Behavioral patterns",
    description:
      "Identify common communication patterns between objects and realize these patterns",
    link: "https://en.wikipedia.org/wiki/Behavioral_pattern",
    patterns: [
      {
        id: "chain",
        title: "Chain of responsibility",
        description:
          "Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.",
        link: "https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern",
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
      },
      {
        id: "strategy",
        title: "Strategy",
        description:
          "Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.",
      },
      {
        id: "template",
        title: "Template method",
        description:
          "Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.",
      },
      {
        id: "visitor",
        title: "Visitor",
        description:
          "Represent an operation to be performed on the elements of an object structure. Visitor lets a new operation be defined without changing the classes of the elements on which it operates.",
      },
    ],
  },
  {
    id: "creational",
    title: "Creational patterns",
    description:
      "Provide the capability to create objects based on a required criterion and in a controlled way",
    link: "https://en.wikipedia.org/wiki/Creational_pattern",
    patterns: [
      {
        id: "builder",
        title: "Builder",
        description:
          "Separate the construction of a complex object from its representation, allowing the same construction process to create various representations.",
      },
      {
        id: "factory",
        title: "Factory method",
        description:
          "Define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.",
      },
      {
        id: "prototype",
        title: "Prototype",
        description:
          "Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum.",
      },
      {
        id: "singleton",
        title: "Singleton",
        description:
          "Ensure a class has only one instance, and provide a global point of access to it.	",
      },
    ],
  },
  {
    id: "structural",
    title: "Structural patterns",
    description:
      "Organize different classes and objects to form larger structures and provide new functionality",
    link: "https://en.wikipedia.org/wiki/Structural_pattern",
    patterns: [
      {
        id: "adapter",
        title: "Adapter",
        description:
          "Convert the interface of a class into another interface clients expect. An adapter lets classes work together that could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator.",
      },
      {
        id: "bridge",
        title: "Bridge",
        description:
          "Decouple an abstraction from its implementation allowing the two to vary independently.",
      },
      {
        id: "composite",
        title: "Composite",
        description:
          "Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.",
      },
      {
        id: "decorator",
        title: "Decorator",
        description:
          "Attach additional responsibilities to an object dynamically keeping the same interface. Decorators provide a flexible alternative to subclassing for extending functionality.",
      },
      {
        id: "facade",
        title: "Facade",
        description:
          "Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.",
      },
      {
        id: "flyweight",
        title: "Flyweight",
        description:
          "Use sharing to support large numbers of similar objects efficiently.",
      },
      {
        id: "proxy",
        title: "Proxy",
        description:
          "Provide a surrogate or placeholder for another object to control access to it.",
      },
    ],
  },
];

const deepFreeze = (obj) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop]))
      deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};

deepFreeze(patternCategoryList);
export default patternCategoryList;

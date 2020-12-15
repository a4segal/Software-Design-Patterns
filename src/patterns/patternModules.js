// Behavioral patterns
import ChainOfResponsibilityModule from "./behavioral/chainOfResponsibility/chainOfResponsibilityModule";
import CommandPatternModule from "./behavioral/command/commandPatternModule";
import IteratorPatternModule from "./behavioral/iterator/iteratorPatternModule";
import MediatorPatternModule from "./behavioral/mediator/mediatorPatternModule";
import MementoPatternModule from "./behavioral/memento/mementoPatternModule";
import ObserverPatternModule from "./behavioral/observer/observerPatternModule";

// Creational patterns
import FactoryMethodModule from "./creational/factoryMethod/factoryMethodModule";

// Structural patterns
//...

/**
 * Categorised list of design patterns modules.
 * @url https://en.wikipedia.org/wiki/Software_design_pattern
 * @const {Object} patternModules - Contains pattern categories with modules imports.
 * @param {Object} patternModules.behavioral - Import behavioral patterns modules.
 * @param {Object} patternModules.creational - Import creational patterns modules.
 * @param {Object} patternModules.structural - Import structural patterns modules.
 */
const patternModules = {
  behavioral: {
    chainOfResponsibility: ChainOfResponsibilityModule,
    command: CommandPatternModule,
    iterator: IteratorPatternModule,
    mediator: MediatorPatternModule,
    memento: MementoPatternModule,
    observer: ObserverPatternModule,
  },
  creational: {
    factoryMethod: FactoryMethodModule,
  },
  structural: {},
};

export default patternModules;

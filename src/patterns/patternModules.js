// Behavioral patterns
import ChainOfResponsibilityModule from "./behavioral/chainOfResponsibility/chainOfResponsibilityModule";
import CommandPatternModule from "./behavioral/command/commandPatternModule";
import IteratorPatternModule from "./behavioral/iterator/iteratorPatternModule";
import MementoPatternModule from "./behavioral/memento/mementoPatternModule";
import ObserverPatternModule from "./behavioral/observer/observerPatternModule";

// Creational patterns
//...

// Structural patterns
//...

const patternModules = {
  behavioral: {
    chainOfResponsibility: ChainOfResponsibilityModule,
    command: CommandPatternModule,
    iterator: IteratorPatternModule,
    memento: MementoPatternModule,
    observer: ObserverPatternModule,
  },
  creational: {},
  structural: {},
};

export default patternModules;

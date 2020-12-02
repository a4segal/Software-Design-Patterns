// Behavioral patterns
import ChainOfResponsibilityModule from "./behavioral/chainOfResponsibility/chainOfResponsibilityModule";
import CommandPatternModule from "./behavioral/command/commandPatternComponent";
import IteratorPatternModule from "./behavioral/iterator/iteratorPatternComponent";
import MementoPatternModule from "./behavioral/memento/mementoPatternComponent";
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

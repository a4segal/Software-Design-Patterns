// Behavioral patterns
import CommandPatternComponent from "./behavioral/command/commandPatternComponent";
import IteratorPatternComponent from "./behavioral/iterator/iteratorPatternComponent";
import MementoPatternComponent from "./behavioral/memento/mementoPatternComponent";
import ObserverPatternComponent from "./behavioral/observer/observerPatternComponent";

// Creational patterns
//...

// Structural patterns
//...

const patternModules = {
  behavioral: {
    command: CommandPatternComponent,
    iterator: IteratorPatternComponent,
    memento: MementoPatternComponent,
    observer: ObserverPatternComponent,
  },
  creational: {},
  structural: {},
};

export default patternModules;

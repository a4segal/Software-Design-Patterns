import React from "react";
import IteratorPatternInputGroup from "./iteratorPatternInputGroup";
import { IteratorManager } from "./iteratorPatternClasses";

const iteratorManager = new IteratorManager();
const fibonacciSequenceIterator = iteratorManager.fibonacciSequenceIterator(); // returns an unlimited sequence
const rangeIterator = iteratorManager.rangeIterator(8, -2, -3); // returns 4 numbers: 8, 5, 2, -1
const reverseArrayIterator = iteratorManager.reverseArrayIterator([
  "Molly (IV)",
  "Percy (III)",
  "Bill (II)",
  "Arthur (I)",
]); // returns 4 strings

const IteratorPatternComponent = () => {
  const [formState, setFormState] = React.useState(
    {
      fibonacciSequenceValue: "",
      reverseArrayValue: "",
      rangeValue: "",
    },
    "iteratorPattern"
  );

  return (
    <React.Fragment>
      <form>
        <div className="form-row">
          <div className="col-4">
            <IteratorPatternInputGroup
              formState={formState}
              setFormState={setFormState}
              iteratorInstance={fibonacciSequenceIterator}
              iteratorKeyName="fibonacciSequenceValue"
              iteratorTitle="Fibonacci Sequence"
            />
          </div>
          <div className="col-4">
            <IteratorPatternInputGroup
              formState={formState}
              setFormState={setFormState}
              iteratorInstance={rangeIterator}
              iteratorKeyName="rangeValue"
              iteratorTitle="Range Iterator"
            />
          </div>
          <div className="col-4">
            <IteratorPatternInputGroup
              formState={formState}
              setFormState={setFormState}
              iteratorInstance={reverseArrayIterator}
              iteratorKeyName="reverseArrayValue"
              iteratorTitle="Reverse Array"
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default IteratorPatternComponent;

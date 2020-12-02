import React from "react";
import { ChainBuilder, NumberHolder } from "./chainOfResponsibilityClasses";

const chain = new ChainBuilder();

// Calling chain of responsibility
chain.process(new NumberHolder(90));
chain.process(new NumberHolder(-50));
chain.process(new NumberHolder(0));

const ChainOfResponsibilityModule = () => {
  const [formState, setFormState] = React.useStickyState(
    {
      num1: 610,
      num2: 987,
      result: NaN,
    },
    "chainOfResponsibilityPattern"
  );

  const calculateResult = (newFormState) => {
    newFormState.result = 0;
    console.log("calculateResult()", newFormState);
  };

  const saveNewFormState = (newFormState) => {
    calculateResult(newFormState);
    setFormState(newFormState);
  };

  if (isNaN(formState.result)) {
    saveNewFormState(formState);
  }

  return (
    <React.Fragment>
      <form>
        <div className="form-row">
          <div className="col-3">
            <input
              name="formNum1"
              type="text"
              className="form-control form-control-sm"
              value={formState.num1}
              onChange={(e) => {
                saveNewFormState({ ...formState, num1: e.target.value });
              }}
              placeholder="First Number"
            />
          </div>

          <div className="col-3">
            <input
              name="formNum2"
              type="text"
              className="form-control form-control-sm"
              value={formState.num2}
              onChange={(e) => {
                saveNewFormState({ ...formState, num2: e.target.value });
              }}
              placeholder="Second Number"
            />
          </div>

          <div className="col-4">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <div className="input-group-text">=</div>
              </div>
              <input
                name="formResult"
                type="text"
                className="form-control"
                value={formState.result}
                disabled={true}
                title="Result"
              />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ChainOfResponsibilityModule;

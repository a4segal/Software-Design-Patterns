import React from "react";
import { ChainBuilder, NumberHolder } from "./chainOfResponsibilityClasses";

const chainBuilder = new ChainBuilder();

const ChainOfResponsibilityModule = ({ useStickyState }) => {
  const [formState, setFormState] = useStickyState(
    {
      num: NaN,
      result: NaN,
    },
    "chainOfResponsibilityPattern"
  );

  const calculateResult = (newFormState) => {
    chainBuilder.build({
      log(message) {
        newFormState.result = message;
      },
    });
    chainBuilder.process(new NumberHolder(newFormState.num));
    console.log("calculateResult()", newFormState);
  };

  const generateRandomNumber = () => {
    const random = Math.random();
    const sign = Math.round((random - 0.5) * 3);
    return Math.round(sign * random * 1000);
  };

  const saveNewFormState = (newFormState) => {
    calculateResult(newFormState);
    setFormState(newFormState);
  };

  if (isNaN(formState.result)) {
    setTimeout(() => {
      saveNewFormState(formState);
    });
  }

  return (
    <React.Fragment>
      <form>
        <div className="form-row">
          <div className="col-6">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-info"
                  type="button"
                  onClick={() => {
                    saveNewFormState({
                      ...formState,
                      num: generateRandomNumber(),
                    });
                  }}
                  title="Click to generate random number"
                >
                  Generate Number
                </button>
              </div>
              <input
                name="formNum"
                type="number"
                className="form-control"
                value={formState.num}
                onChange={(e) => {
                  saveNewFormState({
                    ...formState,
                    num: parseFloat(e.target.value),
                  });
                }}
                placeholder="Enter number or click the button"
              />
            </div>
          </div>

          <div className="col-6">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <div className="input-group-text">Result</div>
              </div>
              <input
                name="formResult"
                type="text"
                className="form-control"
                value={formState.result}
                disabled={true}
                title="Result Message"
              />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ChainOfResponsibilityModule;

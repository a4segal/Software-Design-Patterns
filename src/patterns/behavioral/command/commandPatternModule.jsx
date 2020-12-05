import React from "react";
import { CommandManager } from "./commandPatternClasses";

const commandManager = new CommandManager();
commandManager.handle("+ (add)", (num1, num2) => {
  return parseFloat(num1) + parseFloat(num2);
});
commandManager.handle("- (substract)", (num1, num2) => {
  return parseFloat(num1) - parseFloat(num2);
});
commandManager.handle("* (multiply)", (num1, num2) => {
  return parseFloat(num1) * parseFloat(num2);
});
commandManager.handle("/ (divide)", (num1, num2) => {
  return parseFloat(num1) / parseFloat(num2);
});

const CommandPatternModule = ({ useStickyState }) => {
  const commandNames = commandManager.getCommandNames();
  const [formState, setFormState] = useStickyState(
    {
      type: commandNames[0],
      num1: 610,
      num2: 987,
      result: NaN,
    },
    "commandPattern"
  );

  const calculateResult = (newFormState) => {
    newFormState.result = commandManager.execute(
      newFormState.type,
      newFormState.num1,
      newFormState.num2
    );
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

          <div className="col-2">
            <select
              name="formType"
              className="form-control form-control-sm"
              value={formState.type}
              onChange={(e) => {
                saveNewFormState({ ...formState, type: e.target.value });
              }}
              title="Operation Type"
            >
              {commandNames.map((commandName) => (
                <option key={commandName} value={commandName}>
                  {commandName}
                </option>
              ))}
            </select>
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

export default CommandPatternModule;

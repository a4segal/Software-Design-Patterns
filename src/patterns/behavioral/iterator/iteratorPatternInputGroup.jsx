import React from "react";
const ERROR_NO_ELEMENTS = "No more elements";

const IteratorPatternInputGroup = ({
  formState,
  setFormState,
  iteratorInstance,
  iteratorKeyName,
  iteratorTitle,
}) => {
  let nextValue;
  return (
    <React.Fragment>
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-info"
            type="button"
            onClick={() => {
              nextValue = iteratorInstance.hasNext()
                ? iteratorInstance.next()
                : ERROR_NO_ELEMENTS;
              setFormState({
                ...formState,
                [iteratorKeyName]: nextValue,
              });
            }}
            title="Click to fetch next element"
          >
            {iteratorTitle}
          </button>
        </div>
        <input
          className={[
            "form-control",
            formState[iteratorKeyName] !== ERROR_NO_ELEMENTS
              ? "is-valid"
              : "is-invalid",
          ].join(" ")}
          type="text"
          aria-label="Result"
          placeholder="Click the button"
          defaultValue={formState[iteratorKeyName]}
        />
      </div>
    </React.Fragment>
  );
};

export default IteratorPatternInputGroup;

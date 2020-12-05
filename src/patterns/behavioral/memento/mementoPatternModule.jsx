import React from "react";
import { CareTaker } from "./mementoPatternClasses";
const mementoCareTaker = new CareTaker();

const MementoPatternModule = ({ useStickyState }) => {
  const [formState, setFormState] = useStickyState(
    {
      email: "a4segal@gmail.com",
      subject: "Memento pattern example",
      message:
        "Hello! I hope you are doing well today. What you are seeing is just an example of using the Memento pattern. You are welcome :)",
    },
    "mementoPattern"
  );

  const saveNewFormState = (newFormState) => {
    mementoCareTaker.setState(formState);
    mementoCareTaker.save();
    setFormState(newFormState);
  };

  return (
    <React.Fragment>
      <form>
        <div className="form-row">
          <div className="form-group col-6">
            <input
              name="formEmail"
              type="email"
              className="form-control form-control-sm"
              value={formState.email}
              onChange={(e) => {
                saveNewFormState({ ...formState, email: e.target.value });
              }}
              placeholder="Email"
            />
          </div>
          <div className="form-group col-6">
            <input
              name="formSubject"
              type="text"
              className="form-control form-control-sm"
              value={formState.subject}
              onChange={(e) => {
                saveNewFormState({ ...formState, subject: e.target.value });
              }}
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            name="formMessage"
            className="form-control form-control-sm"
            value={formState.message}
            onChange={(e) => {
              saveNewFormState({ ...formState, message: e.target.value });
            }}
            rows="2"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <div className="btn-group btn-group-sm">
          <button
            type="button"
            className={[
              "btn btn-outline-info",
              mementoCareTaker.count().undo > 0 ? "active" : "disabled",
            ].join(" ")}
            onClick={() => {
              if (mementoCareTaker.count().undo > 0) {
                mementoCareTaker.setState({ ...formState });
                setFormState(mementoCareTaker.undo());
              }
            }}
            autoComplete="off"
            title="Undo changes"
          >
            ↶ Undo
            {mementoCareTaker.count().undo > 0
              ? " (" + mementoCareTaker.count().undo + ")"
              : ""}
          </button>

          <button
            type="button"
            className={[
              "btn btn-outline-info",
              mementoCareTaker.count().redo > 0 ? "active" : "disabled",
            ].join(" ")}
            onClick={() => {
              if (mementoCareTaker.count().redo > 0) {
                mementoCareTaker.setState({ ...formState });
                setFormState(mementoCareTaker.redo());
              }
            }}
            autoComplete="off"
            title="Redo changes"
          >
            ↷ Redo
            {mementoCareTaker.count().redo > 0
              ? " (" + mementoCareTaker.count().redo + ")"
              : ""}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default MementoPatternModule;

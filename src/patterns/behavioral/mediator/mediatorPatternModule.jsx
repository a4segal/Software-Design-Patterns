import React from "react";
import { ChatBox, Participant, Logger } from "./mediatorPatternClasses";

const logger = new Logger();
const chatBox = new ChatBox(logger);
const guestId = 123;
const james = new Participant("James", 21);
const oliver = new Participant("Oliver", 63);
const sophia = new Participant("Sophia", 42);
const guest = new Participant("Guest", guestId);
chatBox.register(james);
chatBox.register(oliver);
chatBox.register(sophia);
chatBox.register(guest);
james.sendMessage(`Hello everyone. My name is ${james.name}`);
james.sendMessage("Hey, how you doing?", oliver);
oliver.sendMessage("Smelly Cat, Smelly Cat..", james);
james.sendMessage("I love this song!", oliver);

const MediatorPatternModule = ({ useStickyState }) => {
  const [formState, setFormState] = useStickyState(
    {
      message:
        "Hello Sophia! What you see is just an example of using the Mediator pattern.",
      sendTo: String(sophia.id),
    },
    "mediatorPattern"
  );

  const sendMessage = (event) => {
    event.preventDefault();
    if (formState.message !== "") {
      const sendTo = chatBox
        .getParticipants()
        .find((participant, id) => participant && id === formState.sendTo);
      guest.sendMessage(formState.message, sendTo);
      setFormState({
        ...formState,
        message: "",
      });
    }
    return false;
  };

  return (
    <React.Fragment>
      <form onSubmit={sendMessage}>
        <p className="text-muted">
          In the example code we have four participants that are joining in a
          chat session by registering with a ChatBox (the Mediator). Each
          participant is represented by a Participant object. Participants send
          messages to each other and the ChatBox handles the routing.
        </p>
        <div className="form-group">
          <div className="input-group input-group-sm">
            <input
              className="form-control"
              name="formMessage"
              type="text"
              value={formState.message}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  message: e.target.value,
                });
              }}
              placeholder="Enter message"
            />

            <div className="input-group-prepend">
              <label
                className="input-group-text"
                htmlFor="formSelectParticipant"
              >
                Send To
              </label>
            </div>
            <select
              className="custom-select col-3"
              id="formSelectParticipant"
              value={formState.sendTo}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  sendTo: parseInt(e.target.value) || "",
                })
              }
              title="Choose..."
            >
              <option value="">ALL</option>
              {chatBox.getParticipants().map((participant, id) => {
                return id !== guestId ? (
                  <option key={id} value={participant.id}>
                    {participant.name}
                  </option>
                ) : null;
              })}
            </select>

            <div className="input-group-append">
              <button
                className={[
                  "btn btn-outline-info",
                  formState.message !== "" ? "active" : "disabled",
                ].join(" ")}
                type="button"
                onClick={sendMessage}
                title="Click to send a chat message"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="form-group">
          <textarea
            name="formMessage"
            className="form-control form-control-sm"
            value={logger.getMessageLog()}
            rows="2"
            title="Message log"
            readOnly={true}
          ></textarea>
        </div>
      </form>
    </React.Fragment>
  );
};

export default MediatorPatternModule;

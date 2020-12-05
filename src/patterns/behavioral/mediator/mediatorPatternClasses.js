class Participant {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.chatbox = null;
  }

  sendMessage(message, sendTo) {
    this.chatbox.send(message, this, sendTo);
  }

  receiveMessage(message, recieveFrom) {
    // console.log(`${recieveFrom.name} sent to ${this.name} the message: ${message}`);
  }
}

class ChatBox {
  constructor(logger = console) {
    this.participants = [];
    this.logger = logger;
  }

  getParticipants() {
    return this.participants;
  }

  register(participant) {
    const id = parseInt(participant.id);
    this.participants[id] = participant;
    participant.chatbox = this;
  }

  send(message, recieveFrom, sendTo) {
    this.logger.log({
      date: new Date(),
      message: message,
      from: recieveFrom,
      to: sendTo,
    });

    if (sendTo) {
      // single message
      sendTo.receiveMessage(message, recieveFrom);
    } else {
      // broadcast message
      this.participants.forEach((participant) => {
        if (participant !== recieveFrom) {
          participant.receiveMessage(message, recieveFrom);
        }
      });
    }
  }
}

// Not part of the pattern
class Logger {
  constructor() {
    this.messages = [];
  }

  log(entry) {
    this.messages.push(entry);
  }

  getMessageLog() {
    return this.messages.reduce(
      (acc, entry) =>
        (acc =
          `[${entry.from.name} to ${
            entry.to ? entry.to.name : "ALL"
          } at ${entry.date.toTimeString().slice(0, 5)}] ${entry.message}\n` +
          acc),
      ""
    );
  }
}

export { ChatBox, Participant, Logger };

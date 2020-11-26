class Memento {
  constructor(state) {
    this.state = JSON.stringify(state);
  }

  getState() {
    return JSON.parse(this.state);
  }
}

class Originator {
  set(state) {
    this.state = state;
  }

  save() {
    return new Memento(this.state);
  }

  restore(memento) {
    return memento.getState();
  }
}

class CareTaker {
  constructor() {
    this.originator = new Originator();
    this.memento = null;
    this.undoStates = [];
    this.redoStates = [];
  }

  setState(state) {
    this.originator.set(state);
    this.memento = this.originator.save();
  }

  save() {
    this.undoStates.push(this.memento);
    this.redoStates = [];
    console.log("save state", this.memento.getState());
  }

  undo() {
    if (this.undoStates.length < 1) {
      return;
    }

    const memento = this.undoStates.pop();
    this.redoStates.push(this.memento);
    return this.originator.restore(memento);
  }

  redo() {
    if (this.redoStates.length < 1) {
      return;
    }

    const memento = this.redoStates.pop();
    this.undoStates.push(this.memento);
    return this.originator.restore(memento);
  }

  count() {
    return {
      undo: this.undoStates.length,
      redo: this.redoStates.length,
    };
  }
}

export { Memento, Originator, CareTaker };

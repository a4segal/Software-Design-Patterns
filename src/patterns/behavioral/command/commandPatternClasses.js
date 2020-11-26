class CommandManager {
  constructor() {
    this.commands = {};
  }

  handle(commandName, callback) {
    this.commands[commandName] = callback.bind(this);
  }

  execute(commandName, ...args) {
    const command = this.commands[commandName];
    if (command) {
      return command(...args);
    }
  }

  getCommandNames() {
    return Object.keys(this.commands);
  }
}

export { CommandManager };

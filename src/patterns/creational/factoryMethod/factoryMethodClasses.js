class FactoryMethod {
  constructor(registeredFactories) {
    this.registeredFactories = registeredFactories;
  }

  create(type, props) {
    return new this.registeredFactories[type]({ ...props, type });
  }
}

class Product {
  constructor(props) {
    this.name = props.name;
    this.type = props.type;
  }
}

class Laptop extends Product {
  constructor(props) {
    super(props);
    this.ram = props.ram || 8;
    this.ssd = props.ssd || 256;
    this.hdd = props.hdd || 0;
    this.display = props.display || 10;
  }
}

class Smartphone extends Product {
  constructor(props) {
    super(props);
    this.ram = props.ram || 2;
    this.ssd = props.ssd || 32;
    this.network = props.network || "4G";
  }
}

class Tablet extends Product {
  constructor(props) {
    super(props);
    this.ram = props.ram || 4;
    this.ssd = props.ssd || 128;
    this.network = props.network || "";
  }
}

export { FactoryMethod, Laptop, Smartphone, Tablet };

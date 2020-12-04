class Observer {
  update() {}
}

class Subject {
  constructor() {
    this.handlers = [];
  }

  subscribe(observer) {
    this.handlers.push(observer);
  }

  unsubscribe(observer) {
    this.handlers = this.handlers.filter(
      (handler) => !(handler instanceof observer)
    );
  }

  notifyAll() {
    return this.handlers.forEach((handler) => handler.update(this));
  }
}

// Build demo app

class Product extends Subject {
  constructor(price = 0) {
    super();
    this.setPrice(price);
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }
}

class PercentageChange extends Observer {
  constructor(percent = 0) {
    super();
    this.percent = percent;
  }

  update(product) {
    product.price = product.price * (1 + this.percent / 100);
  }
}

class Fees extends PercentageChange {}

class Profit extends PercentageChange {}

class Sale extends PercentageChange {}

export { Product, Fees, Profit, Sale };

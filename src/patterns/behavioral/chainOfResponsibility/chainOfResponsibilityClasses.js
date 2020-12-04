class Chain {
  constructor(chain) {
    this.chain = chain;
  }

  process(request) {
    this.chain.process(request);
  }
}

class Processor {
  constructor(processor) {
    this.processor = processor;
  }

  process(request) {
    if (null !== this.processor) {
      this.processor.process(request);
    }
  }
}

class NumberHolder {
  constructor(number) {
    this.number = parseFloat(number);
  }

  getNumber() {
    return this.number;
  }
}

class NegativeProcessor extends Processor {
  constructor(processor, logger = console) {
    super(processor);
    this.logger = logger;
  }

  process(request) {
    if (request.getNumber() < 0) {
      this.logger.log("NegativeProcessor : " + request.getNumber());
    } else {
      super.process(request);
    }
  }
}

class ZeroProcessor extends Processor {
  constructor(processor, logger = console) {
    super(processor);
    this.logger = logger;
  }

  process(request) {
    if (request.getNumber() === 0) {
      this.logger.log("ZeroProcessor : " + request.getNumber());
    } else {
      super.process(request);
    }
  }
}

class PositiveProcessor extends Processor {
  constructor(processor, logger = console) {
    super(processor);
    this.logger = logger;
  }

  process(request) {
    if (request.getNumber() > 0) {
      this.logger.log("PositiveProcessor : " + request.getNumber());
    } else {
      super.process(request);
    }
  }
}

class ChainBuilder extends Chain {
  build(logger) {
    const link1 = new PositiveProcessor(null, logger);
    const link2 = new ZeroProcessor(link1, logger);
    this.chain = new NegativeProcessor(link2, logger);
  }
}

export { ChainBuilder, NumberHolder };

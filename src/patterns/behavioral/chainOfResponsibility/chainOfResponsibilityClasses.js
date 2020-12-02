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
    this.number = number;
  }

  getNumber() {
    return this.number;
  }
}

class NegativeProcessor extends Processor {
  process(request, logger = console) {
    if (request.getNumber() < 0) {
      logger.log("NegativeProcessor : " + request.getNumber());
    } else {
      super.process(request);
    }
  }
}

class ZeroProcessor extends Processor {
  process(request, logger = console) {
    if (request.getNumber() === 0) {
      logger.log("ZeroProcessor : " + request.getNumber());
    } else {
      super.process(request);
    }
  }
}

class PositiveProcessor extends Processor {
  process(request, logger = console) {
    if (request.getNumber() > 0) {
      logger.log("PositiveProcessor : " + request.getNumber());
    } else {
      super.process(request);
    }
  }
}

class ChainBuilder extends Chain {
  constructor(logger) {
    const link1 = new PositiveProcessor(null, logger);
    const link2 = new ZeroProcessor(link1, logger);
    const chain = new NegativeProcessor(link2, logger);
    super(chain);
  }
}

export { ChainBuilder, NumberHolder };

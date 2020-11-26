class IteratorManager {
  fibonacciSequenceIterator() {
    let prev = 0,
      next = 0;
    return {
      hasNext: () => true,
      next: () => {
        // 0, 1, 1, 2, 3, 5..
        if (next < 1) {
          next = 1;
        } else {
          const nextNumber = prev + next;
          prev = next;
          next = nextNumber;
        }
        return prev;
      },
      reset: () => {
        prev = next = 0;
        return 0;
      },
    };
  }

  rangeIterator(start, stop, step = 1) {
    let number = parseInt(start);
    const hasNext = () => (step > 0 ? number < stop : number > stop);
    return {
      hasNext: hasNext,
      next: () => {
        if (hasNext()) {
          const result = number;
          number += step;
          return result;
        } else throw Error("No such element exception");
      },
      reset: () => {
        number = parseInt(start);
        return number;
      },
    };
  }

  reverseArrayIterator(array) {
    let index = array.length - 1;
    return {
      hasNext: () => index >= 0,
      next: () => {
        if (index >= 0) {
          return array[index--];
        } else throw Error("No such element exception");
      },
      reset: () => {
        index = array.length - 1;
        return array[index];
      },
    };
  }
}

export { IteratorManager };

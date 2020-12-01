import React from "react";
import { Product, Fees, Profit, Sale } from "./observerPatternClasses";

const ObserverPatternModule = () => {
  const [formState, setFormState] = React.useStickyState(
    {
      basePrice: 600,
      feesPercent: 10,
      profitPercent: 80,
      saleEnabled: true,
      salePercent: 20,
      retailPrice: NaN,
    },
    "observerPattern"
  );

  const calculateRetailPrice = (formState) => {
    const productManager = new Product(formState.basePrice);
    productManager.subscribe(new Fees(formState.feesPercent));
    productManager.subscribe(new Profit(formState.profitPercent));
    productManager.subscribe(new Sale(-formState.salePercent));
    if (!formState.saleEnabled) {
      productManager.unsubscribe(Sale);
    }
    productManager.notifyAll(); // calculate product price
    formState.retailPrice = productManager.getPrice();
    console.log("calculateRetailPrice()", formState);
  };

  const saveNewFormState = (newFormState) => {
    calculateRetailPrice(newFormState);
    setFormState(newFormState);
  };

  if (isNaN(formState.retailPrice)) {
    saveNewFormState(formState);
  }

  return (
    <React.Fragment>
      <form>
        <div className="form-row">
          <div className="col-2">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <div className="input-group-text">Base Price</div>
              </div>
              <input
                name="formBasePrice"
                type="number"
                className="form-control"
                value={formState.basePrice}
                onChange={(e) => {
                  saveNewFormState({ ...formState, basePrice: e.target.value });
                }}
                title="Product's Base Price"
              />
            </div>
          </div>

          <div className="col-2">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <div className="input-group-text">Fees (%)</div>
              </div>
              <input
                name="formFeesPercent"
                type="number"
                className="form-control"
                value={formState.feesPercent}
                onChange={(e) => {
                  saveNewFormState({
                    ...formState,
                    feesPercent: e.target.value,
                  });
                }}
                title="Percentage Fee"
              />
            </div>
          </div>

          <div className="col-2">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <div className="input-group-text">Profit (%)</div>
              </div>
              <input
                name="formProfitPercent"
                type="number"
                className="form-control"
                value={formState.profitPercent}
                onChange={(e) => {
                  saveNewFormState({
                    ...formState,
                    profitPercent: e.target.value,
                  });
                }}
                title="Percentage Profit"
              />
            </div>
          </div>

          <div className="col-2">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    name="formSaleEnabled"
                    type="checkbox"
                    aria-label="Checkbox for sale event"
                    checked={formState.saleEnabled}
                    onChange={(e) => {
                      saveNewFormState({
                        ...formState,
                        saleEnabled: e.target.checked,
                      });
                    }}
                    title="Check to enable sale event"
                  />
                </div>
              </div>
              <div className="input-group-prepend">
                <div className="input-group-text">Sale (%)</div>
              </div>
              <input
                name="formSalePercent"
                type="number"
                className="form-control"
                disabled={!formState.saleEnabled}
                value={formState.salePercent}
                onChange={(e) => {
                  saveNewFormState({
                    ...formState,
                    salePercent: e.target.value,
                  });
                }}
                title="Percentage Sale"
              />
            </div>
          </div>

          <div className="col-4">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <div className="input-group-text">Retail Price</div>
              </div>
              <input
                name="formRetailPrice"
                type="text"
                className="form-control"
                value={formState.retailPrice}
                disabled={true}
                title="Retail Price"
              />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ObserverPatternModule;

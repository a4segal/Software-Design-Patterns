import React from "react";
import {
  FactoryMethod,
  Laptop,
  Smartphone,
  Tablet,
} from "./factoryMethodClasses";

const registeredFactories = {
  laptop: Laptop,
  smartphone: Smartphone,
  tablet: Tablet,
};
const factoryMethod = new FactoryMethod(registeredFactories);

const products = [];
products.push(
  factoryMethod.create("laptop", {
    name: "MacBook Pro 4th Gen",
    ram: 16,
    ssd: 512,
    display: 13.3,
  })
);
products.push(
  factoryMethod.create("smartphone", {
    name: "Apple iPhone 12 Pro",
    ram: 6,
    ssd: 128,
    network: "5G",
  })
);
products.push(
  factoryMethod.create("tablet", {
    name: "Samsung Galaxy Tab",
    ram: 6,
    ssd: 128,
    network: "",
  })
);

const FactoryMethodModule = ({ useStickyState }) => {
  const [formState, setFormState] = useStickyState(
    {
      name: "My Gadget",
      type: "",
    },
    "factoryMethodPattern"
  );

  const createProduct = (event) => {
    event.preventDefault();
    if (formState.name !== "" && formState.type !== "") {
      products.unshift(
        // randomize specifications
        factoryMethod.create(formState.type, {
          name: formState.name,
          ram: getArrayRand([0, 8, 16]),
          ssd: getArrayRand([0, 256, 512]),
          hdd: getArrayRand([0, 512, 1024]),
          display: getArrayRand([13, 15]),
          network: getArrayRand(["", "5G"]),
        })
      );
      setFormState({
        ...formState,
        name: "",
      });
    }
    return false;
  };

  const getArrayRand = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  return (
    <React.Fragment>
      <form onSubmit={createProduct}>
        <p className="text-muted">
          In this example the Factory object creates three different types of
          products. Each product type has different specifications. The client
          instructs the factory what type of product to create by passing a type
          argument into the Factory Method. Three different product types are
          created; all are stored in the same array.
        </p>
        <div className="form-group">
          <div className="input-group input-group-sm">
            <input
              className="form-control"
              name="formName"
              type="text"
              value={formState.name}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  name: e.target.value,
                });
              }}
              placeholder="Enter product name"
            />

            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="formSelectType">
                Product Type
              </label>
            </div>
            <select
              className="custom-select col-3"
              id="formSelectType"
              value={formState.type}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  type: e.target.value || "",
                })
              }
              title="Choose..."
            >
              <option value="">Choose...</option>
              {Object.keys(registeredFactories).map((type) => (
                <option key={type} value={type}>
                  {registeredFactories[type].name}
                </option>
              ))}
            </select>

            <div className="input-group-append">
              <button
                className={[
                  "btn btn-outline-info",
                  formState.name !== "" && formState.type !== ""
                    ? "active"
                    : "disabled",
                ].join(" ")}
                type="button"
                onClick={createProduct}
                title="Click to create a product"
              >
                Create Product
              </button>
            </div>
          </div>
        </div>

        <div className="form-group">
          <textarea
            name="formMessage"
            className="form-control form-control-sm"
            value={JSON.stringify(products)}
            rows="2"
            title="Created products"
            readOnly={true}
          ></textarea>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FactoryMethodModule;

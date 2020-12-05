import React from "react";

const CategoryCardHeader = ({ category, index }) => {
  return (
    <React.Fragment>
      <div
        className="App-category-card-header card-header"
        id={"heading-" + category.id}
      >
        <h5 className="mb-0">
          <button
            className="btn btn-block p-0 text-left text-white"
            data-toggle="collapse"
            data-target={"#collapse-" + category.id}
            aria-expanded={index === 0 ? "true" : "false"}
            aria-controls={"collapse-" + category.id}
          >
            <strong>
              <span className="text-capitalize">{category.title}</span>
              <span className="text-muted">
                <i className="m-2">&ndash;</i>
                {category.description}
              </span>
            </strong>
          </button>
        </h5>
      </div>
    </React.Fragment>
  );
};

export default CategoryCardHeader;

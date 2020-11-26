import React from "react";
import BehavioralPatterns from "./behavioral/behavioralPatterns";
import CreationalPatterns from "./creational/creationalPatterns";
import StructuralPatterns from "./structural/structuralPatterns";

const _patternCategoryComponents = {
  behavioral: BehavioralPatterns,
  creational: CreationalPatterns,
  structural: StructuralPatterns,
};

const PatternCategory = ({
  category,
  index,
  getCategoryPattern,
  getCategoryPatternId,
  setCategoryPatternId,
}) => {
  const selectedCategoryId = category.id;
  const selectedPatternId = getCategoryPatternId(selectedCategoryId);
  const SelectedComponentTag = _patternCategoryComponents[selectedCategoryId];

  return (
    <React.Fragment>
      <div
        className="App-pattern-category card bg-dark"
        key={selectedCategoryId}
      >
        <div className="card-header" id={"heading-" + selectedCategoryId}>
          <h5 className="mb-0">
            <button
              className="btn btn-block p-0 text-left text-white"
              data-toggle="collapse"
              data-target={"#collapse-" + selectedCategoryId}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={"collapse-" + selectedCategoryId}
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

        <div
          id={"collapse-" + selectedCategoryId}
          className={"collapse" + (index === 0 ? " show" : "")}
          aria-labelledby={"heading-" + selectedCategoryId}
          data-parent="#accordion"
        >
          <div className="card-body">
            {category.patterns && category.patterns.length ? (
              <div className="form-group">
                <div className="input-group input-group-sm mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Select pattern</div>
                  </div>
                  <select
                    className="form-control"
                    value={selectedPatternId}
                    onChange={(e) =>
                      setCategoryPatternId(selectedCategoryId, e.target.value)
                    }
                  >
                    {category.patterns.map((pattern) => (
                      <option
                        className={pattern.hasExample ? "font-weight-bold" : ""}
                        key={pattern.id}
                        value={pattern.id}
                      >
                        {pattern.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <span></span>
            )}

            {SelectedComponentTag ? (
              <SelectedComponentTag
                key={selectedCategoryId}
                category={category}
                selectedPatternId={selectedPatternId}
                getCategoryPattern={getCategoryPattern}
              />
            ) : (
              <small className="d-block text-center text-info">
                "{selectedPatternId}" design pattern was chosen
              </small>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PatternCategory;

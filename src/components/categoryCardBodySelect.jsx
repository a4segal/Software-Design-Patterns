import React from "react";

const CategoryCardBodySelect = ({
  category,
  selectedCategoryId,
  selectedPatternId,
  setCategoryPatternId,
}) => {
  return (
    <React.Fragment>
      {category.patterns && category.patterns.length ? (
        <div className="form-group">
          <div className="input-group input-group-sm mb-2">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect">
                Patterns
              </label>
            </div>
            <select
              id="inputGroupSelect"
              className="form-control custom-select"
              value={selectedPatternId}
              onChange={(e) =>
                setCategoryPatternId(selectedCategoryId, e.target.value)
              }
            >
              <option value="">Choose...</option>
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
    </React.Fragment>
  );
};

export default CategoryCardBodySelect;

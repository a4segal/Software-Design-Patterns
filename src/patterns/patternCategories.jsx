import React from "react";
import PatternCategory from "./patternCategory";

const PatternCategories = ({
  patternCategoriesList,
  getCategoryPattern,
  getCategoryPatternId,
  setCategoryPatternId,
}) => {
  return (
    <React.Fragment>
      <div id="accordion" className="App-pattern-categories mb-3">
        {patternCategoriesList.map((category, index) => (
          <PatternCategory
            key={category.id}
            index={index}
            category={category}
            getCategoryPattern={getCategoryPattern}
            getCategoryPatternId={getCategoryPatternId}
            setCategoryPatternId={setCategoryPatternId}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default PatternCategories;

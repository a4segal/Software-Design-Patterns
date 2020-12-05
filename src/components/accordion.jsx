import React from "react";
import CategoryCard from "./categoryCard";

const Accordion = ({
  getCategoryPattern,
  getCategoryPatternId,
  setCategoryPatternId,
  patternCategories,
  patternModules,
}) => {
  return (
    <React.Fragment>
      <div id="accordion" className="App-categories-accordion mb-3">
        {patternCategories.map((category, index) => (
          <CategoryCard
            key={category.id}
            index={index}
            category={category}
            getCategoryPattern={getCategoryPattern}
            getCategoryPatternId={getCategoryPatternId}
            setCategoryPatternId={setCategoryPatternId}
            patternModules={patternModules}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Accordion;

import React from "react";
import CategoryCard from "./categoryCard";
import patternModules from "./patternModules";

const CategoriesAccordion = ({
  categoriesData,
  getCategoryPattern,
  getCategoryPatternId,
  setCategoryPatternId,
}) => {
  return (
    <React.Fragment>
      <div id="accordion" className="App-categories-accordion mb-3">
        {categoriesData.map((category, index) => (
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

export default CategoriesAccordion;

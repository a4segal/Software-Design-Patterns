import React from "react";
import CategoryCardHeader from "./categoryCardHeader";
import CategoryCardBody from "./categoryCardBody";

const CategoryCard = ({
  category,
  index,
  getCategoryPattern,
  getCategoryPatternId,
  setCategoryPatternId,
  patternModules,
}) => {
  return (
    <React.Fragment>
      <div className="App-category-card card bg-dark" key={category.id}>
        <CategoryCardHeader category={category} index={index} />
        <div
          id={"collapse-" + category.id}
          className={"collapse" + (index === 0 ? " show" : "")}
          aria-labelledby={"heading-" + category.id}
          data-parent="#accordion"
        >
          <CategoryCardBody
            category={category}
            getCategoryPattern={getCategoryPattern}
            getCategoryPatternId={getCategoryPatternId}
            setCategoryPatternId={setCategoryPatternId}
            patternModules={patternModules}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryCard;

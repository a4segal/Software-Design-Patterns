import React from "react";
import CategoryCardBodySelect from "./categoryCardBodySelect";

let cachedSelectedPattern = {};

const CategoryCardBody = ({
  category,
  getCategoryPattern,
  getCategoryPatternId,
  setCategoryPatternId,
  patternModules,
}) => {
  const selectedCategoryId = category.id;
  const selectedPatternId = getCategoryPatternId(selectedCategoryId);
  const SelectedPatternModuleTag =
    patternModules[selectedCategoryId] &&
    patternModules[selectedCategoryId][selectedPatternId];

  if (cachedSelectedPattern.id !== selectedPatternId) {
    const selectedPattern = getCategoryPattern(category.id, selectedPatternId);
    cachedSelectedPattern = selectedPattern || {};
  }

  return (
    <React.Fragment>
      <div className="card-body">
        <CategoryCardBodySelect
          category={category}
          selectedCategoryId={selectedCategoryId}
          selectedPatternId={selectedPatternId}
          setCategoryPatternId={setCategoryPatternId}
        />

        {selectedPatternId ? (
          <React.Fragment>
            <h6 className="text-info">Pattern Description</h6>
            <blockquote className="blockquote" style={{ fontSize: "inherit" }}>
              {cachedSelectedPattern.description}
              {cachedSelectedPattern.link ? (
                <footer className="blockquote-footer">
                  <cite
                    title={
                      "Read more on Wikipedia: " + cachedSelectedPattern.title
                    }
                  >
                    <a
                      href={cachedSelectedPattern.link}
                      className="m-2"
                      style={{ color: "inherit" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      From Wikipedia, the free encyclopedia
                    </a>
                  </cite>
                </footer>
              ) : (
                ""
              )}
            </blockquote>

            <h6 className="text-info">Pattern Example(s)</h6>
            {SelectedPatternModuleTag ? (
              <SelectedPatternModuleTag />
            ) : (
              <React.Fragment>
                <code className="d-block text-center">
                  There are no code examples yet for the &ldquo;
                  {cachedSelectedPattern.title}&rdquo; design pattern.
                </code>
              </React.Fragment>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <code className="d-block text-center">
              No design pattern selected.
            </code>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default CategoryCardBody;

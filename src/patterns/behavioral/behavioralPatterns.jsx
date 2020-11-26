import React from "react";
import CommandPatternComponent from "./command/commandPatternComponent";
import IteratorPatternComponent from "./iterator/iteratorPatternComponent";
import MementoPatternComponent from "./memento/mementoPatternComponent";
import ObserverPatternComponent from "./observer/observerPatternComponent";

const _patternComponents = {
  command: CommandPatternComponent,
  iterator: IteratorPatternComponent,
  memento: MementoPatternComponent,
  observer: ObserverPatternComponent,
};

let cachedSelectedPattern = {};

const BehavioralPatterns = ({
  category,
  selectedPatternId,
  getCategoryPattern,
}) => {
  if (cachedSelectedPattern.id !== selectedPatternId) {
    cachedSelectedPattern = getCategoryPattern(category.id, selectedPatternId);
  }

  const SelectedComponentTag = _patternComponents[selectedPatternId];

  return (
    <React.Fragment>
      <h6 className="text-info">Pattern Description</h6>
      <blockquote className="blockquote" style={{ fontSize: "inherit" }}>
        {cachedSelectedPattern.description}
        {cachedSelectedPattern.link ? (
          <footer className="blockquote-footer">
            <cite
              title={"Read more on Wikipedia: " + cachedSelectedPattern.title}
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

      {SelectedComponentTag ? (
        <React.Fragment>
          <h6 className="text-info">Pattern Example(s)</h6>
          <SelectedComponentTag
            key={selectedPatternId}
            category={category}
            selectedPatternId={selectedPatternId}
            getCategoryPattern={getCategoryPattern}
          />
        </React.Fragment>
      ) : (
        <code className="d-block text-center">
          &ldquo;{cachedSelectedPattern.title}&rdquo; design pattern was chosen
        </code>
      )}
    </React.Fragment>
  );
};

export default BehavioralPatterns;

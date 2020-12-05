import React from "react";
import { useStickyState } from "./utils";
import Accordion from "./components/accordion";
import NavBar from "./components/navbar";
import logo from "./logo.svg";
import "./App.css";

import patternCategories from "./patterns/patternCategories";
import patternModules from "./patterns/patternModules";

/**
 * In software engineering, a software design pattern is a general, reusable
 * solution to a commonly occurring problem within a given context in software
 * design. It is not a finished design that can be transformed directly into
 * source or machine code. Rather, it is a description or template for how
 * to solve a problem that can be used in many different situations. Design
 * patterns are formalized best practices that the programmer can use to
 * solve common problems when designing an application or system.
 *
 * Main sources for the project:
 * @url https://reactjs.org/docs/faq-structure.html
 * @url https://en.wikipedia.org/wiki/Software_design_pattern
 */

const App = (props) => {
  const patternCategoriesIds = patternCategories.map((category) => category.id);

  // declare new state variables

  const [selectedPatternIds, setSelectedPatternIds] = useStickyState(
    {},
    "selectedPatternIds"
  );

  // PATTERNS methods

  const getCategoryPattern = (categoryId, patternId) => {
    try {
      const category = patternCategories.find(
        (category) => category.id === categoryId
      );
      const categoryPattern = category.patterns.find(
        (pattern) => pattern.id === patternId
      );
      //console.log("getCategoryPattern()", categoryId, patternId);
      return categoryPattern;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const getCategoryPatternId = (categoryId) => {
    return categoryId ? selectedPatternIds[categoryId] : null;
  };

  const setCategoryPatternId = (categoryId, selectedPatternId) => {
    if (patternCategoriesIds.indexOf(categoryId) === -1) {
      return console.error("Invalid design pattern category:", categoryId);
    }
    const newSelectedPatternIds = { ...selectedPatternIds };
    newSelectedPatternIds[categoryId] = selectedPatternId;
    setSelectedPatternIds(newSelectedPatternIds);
  };

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <Accordion
            getCategoryPattern={getCategoryPattern}
            getCategoryPatternId={getCategoryPatternId}
            setCategoryPatternId={setCategoryPatternId}
            patternCategories={patternCategories}
            patternModules={patternModules}
          />
        </div>

        <a
          className="App-link text-info"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

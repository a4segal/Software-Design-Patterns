import React from "react";
import NavBar from "./components/navbar";
import logo from "./logo.svg";
import "./App.css";

import patternCategoriesList from "./patterns/patternCategoriesList";
import PatternCategories from "./patterns/patternCategories";

React.useStickyState = (defaultValue, key) => {
  const keyPrefix = "RS_"; //React State's prefix
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(keyPrefix + key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(keyPrefix + key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

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
  const patternCategoriesIds = patternCategoriesList.map(
    (category) => category.id
  );

  // declare new state variables

  const [selectedPatternIds, setSelectedPatternIds] = React.useStickyState(
    {},
    "selectedPatternIds"
  );

  // PATTERNS methods

  const getCategoryPattern = (categoryId, patternId) => {
    try {
      const category = patternCategoriesList.find(
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
          <PatternCategories
            patternCategoriesList={patternCategoriesList}
            getCategoryPattern={getCategoryPattern}
            getCategoryPatternId={getCategoryPatternId}
            setCategoryPatternId={setCategoryPatternId}
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

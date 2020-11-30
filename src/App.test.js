import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders design patterns text", () => {
  render(<App />);
  const linkElement = screen.getByText(/design patterns/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

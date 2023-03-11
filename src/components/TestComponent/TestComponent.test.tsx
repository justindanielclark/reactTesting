// import React from "react";
import TestComponent from "./TestComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const testListItems = ["Justin", "Natasha", "Steve"];

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

test("<TestComponent/> : Snapshot Comparison", () => {
  setup(<TestComponent testing />);
  const element = screen.getByTestId("TestComponentRoot");
  expect(element).toMatchSnapshot();
});

test("<TestComponent/> : Snapshot with Custom Header", async () => {
  const { baseElement } = setup(
    <TestComponent heading="Custom Header" testing />
  );
  expect(baseElement).toMatchSnapshot();
});

test("<TestComponent/> : Snapshot with ListItems", async () => {
  const { baseElement, getByRole } = setup(
    <TestComponent testing listContent={testListItems} />
  );
  expect(baseElement).toMatchSnapshot();
});

test("<TestComponent/> : Increments when Increment Button is Clicked", async () => {
  const { user, getByRole } = setup(<TestComponent />);
  const logElement = getByRole("log");
  const incrementBtn = getByRole("button", { name: "Increment" });
  await user.click(incrementBtn);
  await user.click(incrementBtn);
  expect(logElement.textContent).toBe("2");
});

test("<TestComponent/> : Decrements when Decrement Button is Clicked", async () => {
  const { user, getByRole } = setup(<TestComponent />);
  const logElement = getByRole("log");
  const decrementBtn = getByRole("button", { name: "Decrement" });
  await user.click(decrementBtn);
  await user.click(decrementBtn);
  expect(logElement.textContent).toBe("-2");
});

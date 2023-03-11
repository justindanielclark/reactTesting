// import React from "react";
import TestComponent from "./TestComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("<TestComponent/> : Snapshot Comparison", () => {
  render(<TestComponent />);
  const element = screen.getByTestId("TestComponentRoot");
  expect(element).toMatchSnapshot();
});

test("<TestComponent/> : Increments when Increment Button is Clicked", async () => {
  render(<TestComponent />);
  const logElement = screen.getByRole("log");
  const incrementBtn = screen.getByRole("button", { name: "Increment" });
  await userEvent.click(incrementBtn);
  await userEvent.click(incrementBtn);
  expect(logElement.textContent).toBe("2");
});

test("<TestComponent/> : Decrements when Decrement Button is Clicked", async () => {
  render(<TestComponent />);
  const logElement = screen.getByRole("log");
  const decrementBtn = screen.getByRole("button", { name: "Decrement" });
  await userEvent.click(decrementBtn);
  await userEvent.click(decrementBtn);
  expect(logElement.textContent).toBe("-2");
});

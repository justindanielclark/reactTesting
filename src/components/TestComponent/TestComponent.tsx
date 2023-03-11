import React, { useState } from "react";

type Props = {
  testing?: boolean;
  initialState?: number;
  heading?: string;
  listContent?: string[];
};

function TestComponent({ heading, listContent, initialState, testing }: Props) {
  const [state, setState] = useState(initialState ? initialState : 0);
  const handleClickIncrementButton = (e: React.MouseEvent): void => {
    setState(state + 1);
  };
  const handleClickDecrementButton = (e: React.MouseEvent): void => {
    setState(state - 1);
  };
  const renderList = (listContent: string[]): JSX.Element => {
    return (
      <ul>
        {listContent.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    );
  };
  return (
    <div data-testid={testing ? "TestComponentRoot" : undefined}>
      <h1>{heading ? heading : "Default Heading"}</h1>
      {listContent ? renderList(listContent) : <p>No Data Provided</p>}
      <div>
        <p>State Values:</p>
        <p role={"log"}>{state}</p>
      </div>
      <button
        role="button"
        type="button"
        name="incrementBtn"
        onClick={handleClickIncrementButton}
        className="bg-green-900 p-1 rounded mx-2"
      >
        Increment
      </button>
      <button
        role="button"
        type="button"
        name="decrementBtn"
        onClick={handleClickDecrementButton}
        className="bg-red-900 p-1 rounded mx-2"
      >
        Decrement
      </button>
    </div>
  );
}

export default TestComponent;

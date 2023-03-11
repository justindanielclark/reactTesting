import React from "react";
import ReactDOM from "react-dom/client";
import TestComponent from "./components/TestComponent/TestComponent";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TestComponent listContent={["Justin", "Tasha", "Steve"]} />
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// const root = document.getElementById("root");
// ReactDOM.createRoot(root).render(<h1>What is up</h1>);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

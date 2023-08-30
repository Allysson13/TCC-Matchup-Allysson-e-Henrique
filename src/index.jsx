import React from "react";
import ReactDOMClient from "react-dom/client";
import { Controller } from "./screens/Controller";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Controller />);

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PasswordGenerator from "./pages/PasswordGenerator";

function App() {
  let routes = (
    <Routes>
      <Route path="/" element={<PasswordGenerator />} />
    </Routes>
  );
  return <div>{routes}</div>;
}

export default App;

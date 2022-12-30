import React from "react";
import Footer from "./Footer";
import Search from "./Search";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Whatever the Carl Weathers</h1>

      <Search defaultCity="New york" />

      <Footer />
    </div>
  );
}

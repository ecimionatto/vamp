import React from "react";
import NavBar from "./components/NavBar";
// New - import the React Router components, and the Profile page component
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <h1 className="text-center">Vamp</h1>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;

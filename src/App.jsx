import React, { useState } from "react";
import "./App.css";

import Router from "./routes";

function App() {
  return (
      <>
    <React.Suspense>
      <Router />
    </React.Suspense>
    </>
    
  );
}

export default App;

import React from "react";
import Home from "./Pages/Home.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <Router>
        <AppRoutes />
      </Router>
  );
}

export default App;
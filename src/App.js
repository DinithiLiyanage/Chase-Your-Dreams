import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { useAuth } from "./contexts/authContext";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/home" element={Home} />
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={isAuthenticated ? <Navigate to="/home" /> : <SignIn />}
        />
      </Routes>
    </Router>
  );
}

export default App;

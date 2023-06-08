import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/register">
          <SignupPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </main>
  );
}

export default App;

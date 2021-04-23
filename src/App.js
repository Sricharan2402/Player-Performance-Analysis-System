import React from "react";
import { AuthProvider } from "./auth/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/Signin";
import HomePage from "./components/Homepage";
import PrivateRoute from "./components/PrivateRoute";
import ChatComponent from "./components/chatComponent/ChatComponent";

export default function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/signin" component={Signin} />
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/messenger" component={ChatComponent} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

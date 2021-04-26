import React from "react";
import { AuthProvider } from "./auth/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/Signin";
import HomePage from "./components/Homepage";
import PrivateRoute from "./components/PrivateRoute";
import ChatComponent from "./components/chat/ChatComponent";
import ChatRoomComponent from "./components/chatRoom/ChatRoomComponent";
import { PlayerStats, MatchReport, TeamStats } from "./components/Stats";
import UploadData from "./components/admin/UploadData";
export default function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/signin" component={Signin} />
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/messenger" component={ChatComponent} />
            <PrivateRoute
              exact
              path="/chatroom"
              component={ChatRoomComponent}
            />
            <PrivateRoute exact path="/playerstats" component={PlayerStats} />
            <PrivateRoute exact path="/teamstats" component={TeamStats} />
            <PrivateRoute exact path="/matchreport" component={MatchReport} />
            <PrivateRoute exact path="/uploaddata" component={UploadData} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NewRoom } from "./pages/home/NewRoom";
import { Home } from "./pages/home/Home";

import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/room/Room";
import { AdminRoom } from "./pages/room/AdminRoom";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

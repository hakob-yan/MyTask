import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import AlbumItems from "./AlbumItems/AlbumItems";
import "./App.css";


const App = () => {

  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path="/:categoryId/photos">
          <AlbumItems />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

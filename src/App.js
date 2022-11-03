import { Fragment } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Users from "./components/users/Users.js";

function App() {
  return (
    <Fragment>
      <Header />;
      <Users />;
    </Fragment>
  );
}

export default App;

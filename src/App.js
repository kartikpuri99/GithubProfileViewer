import { BrowserRouter, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Search from "./components/Search/Search";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/user/:id" component={Detail} />
      <Route path="/" exact component={Search} />
    </BrowserRouter>
  );
};

export default App;

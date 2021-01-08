import "./App.css";
import { Component } from "react";
import Form from "./Form";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    counter: 0,
  };

  addCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  subtractCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    const routes = [
    ];
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <button onClick={this.addCounter}>Add</button>
            <p>{this.state.counter}</p>
            <button onClick={this.subtractCounter}>Subtract</button>
            <Link to="/form">Go to form</Link>
          </Route>
          {routes.map((route) => {
            return <Route path={route.path}>{route.component}</Route>;
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

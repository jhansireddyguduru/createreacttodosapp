import React, { Component } from "react";
import Header from "./components/layout/header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
//import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Axios from "axios";

class App extends Component {
  /*state = {
    reminders: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner with wife",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Meeting with boss",
        completed: false
      }
    ]
  };*/
  state = {
    reminders: []
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      res => this.setState({ reminders: res.data })
    );
  }
  markComplete = id => {
    console.log("HI from app", id);
    this.setState({
      reminders: this.state.reminders.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    //console.log("delete from app", id);
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      reminders: [...this.state.reminders.filter(todo => todo.id !== id)]
    }));
  };
  addToDo = title => {
    //console.log(title);
    /*const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };*/
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    }).then(res =>
      this.setState({ reminders: [...this.state.reminders, res.data] })
    );
  };
  render() {
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addToDo={this.addToDo} />
                  <Todos
                    reminders={this.state.reminders}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

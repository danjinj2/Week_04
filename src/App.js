import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    todoListTitle: "My Todo List",
    todos: ["element 1", "element 2"]
  };

  addParameter = () => {
    this.setState({
      todos: []
    })
  };

  render() {
    return (
      <div>
        <h1>{this.state.todoListTitle}</h1>
        {this.state.todos.map(x => (
          <ToDoListItem todo={x} />
        ))}
        <button onClick={this.addParameter}> Delete todo</button>
      </div>
    );
  }
}

export default App;

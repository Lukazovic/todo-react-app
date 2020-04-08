import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  addNewTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
  }
  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        task={todo.task}
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
        toggleCompletion={this.toggleCompletion}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A simple React Todo List App.</span>
        </h1>
        <NewTodoForm addTodo={this.addNewTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

import React, { Component } from 'react';
import TodosList from './todosList';
import AddTodo from '../components/addTodo';

const todos = [
  {
    task: 'Take out trash',
    isCompleted: false
  },
  {
    task: 'call brother',
    isCompleted: true
  }
];
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">  
                <div className="wrapper">
                    <h1 className="jumbotron">Todo's List</h1>
                    <AddTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                    <TodosList
                        todos={this.state.todos}
                        toggleTask={this.toggleTask.bind(this)}
                        saveTask={this.saveTask.bind(this)}
                        deleteTask={this.deleteTask.bind(this)}
                    />
                </div>
                </div>
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}
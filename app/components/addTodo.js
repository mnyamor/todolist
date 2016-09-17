import React, { Component } from 'react';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <span className="error">{this.state.error}</span>;
    }

    render() {
        return (
        <div className="form-wrapper">
            <form className="form-group" onSubmit={this.handleCreate.bind(this)}>
                <div className="input-group">
                <input className="form-control" type="text" placeholder="What do I need to do?" ref="createInput" />
                 <span className="input-group-addon"><button className="button">Add todo</button></span>     
                </div>     
            </form>
            {this.renderError()}
         </div>
        );
    }

    handleCreate(event) {
        event.preventDefault();
        console.log('test');
        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }
}
import React, { Component } from 'react';

export default class TodosListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }
    renderTaskSection() {
        const { task, isCompleted } = this.props;
        const taskIsCompleted =  (isCompleted) ? 'tasks done' : 'tasks';

        if (this.state.isEditing) {
            return (
                    <span className="tasks editing" onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" className="form-control" defaultValue={task} ref="editInput" />
                    </span>         
            );
        }

        return (
            <span className={taskIsCompleted} onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </span>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <span className="actions pull-right">
                    <button onClick={this.onSaveClick.bind(this)}><i className="fa fa-floppy-o fa-lg" aria-hidden="true"></i></button>
                    <button onClick={this.onCancelClick.bind(this)}><i className="fa fa-undo fa-lg" aria-hidden="true"></i></button>
                </span>
            );
        }

        return (
            <span className="actions pull-right">
                <button onClick={this.onEditClick.bind(this)}><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}><i className="fa fa-trash-o fa-lg"  aria-hidden="true"></i></button>
            </span>
        );
    }

    render() {
        return (
            <li>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </li>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}
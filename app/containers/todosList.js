import React, { Component } from 'react';
import TodosListItem from '../components/todosListItem';
import _ from 'lodash';

export default class TodosList extends Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }
    render() {
        return (
                <ul className="todos">
                    {this.renderItems()}
                </ul>
        );
    }
}
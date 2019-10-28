// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from "./Todo.js";

import 'Todo.css';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}

        </div>
    )
};

export default TodoList;
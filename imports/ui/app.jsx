import React, { Component } from 'react';
import { Link } from 'react-router'

import Task from './task.jsx';


// App component - represents the whole app
export default class App extends Component {
    getTasks() {
        return [
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' }
        ];
    }

    renderTasks() {
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Roast Meter</h1>
                    <ul role="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}
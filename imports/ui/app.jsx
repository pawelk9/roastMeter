import React, { Component } from 'react';

import Task from './task.jsx';
import Navigation from "./navigation.jsx";

// App component - represents the whole app
export default class App extends Component {
    getTasks() {
        return [
            { _id: 1, text: 'This is task' },
            { _id: 2, text: 'This is task' },
            { _id: 3, text: 'This is task' }
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
                    <Navigation />
                </header>

                {this.props.children}

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}
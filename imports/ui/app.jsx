import React from 'react';

import Task from './task.jsx';
import Navigation from "./navigation.jsx";

// App component - represents the whole app
export default class App extends React.Component {
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
                    <Navigation />
                </header>
                {this.props.children}
            </div>
        );
    }
}
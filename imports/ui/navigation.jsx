import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Navigation extends Component {
    render () {
        return (
            <div>
                <ul role="nav">
                    <li><Link activeClassName="active" to="/">Home</Link></li>
                    <li><Link activeClassName="active" to="/about">About</Link></li>
                </ul>
            </div>
        );
    }
}
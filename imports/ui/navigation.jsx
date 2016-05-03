import React from 'react';
import { Link } from 'react-router'

export default class Navigation extends React.Component {
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
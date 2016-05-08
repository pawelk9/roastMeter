import React from 'react';

export default class Prompt extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ""
        };

        this.onSubmitUser = this.onSubmitUser.bind(this);
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmitUser(e) {
        e.preventDefault();


        var username = this.state.username;
        this.setState({
            username: ""
        });

        this.context.router.push({
            pathname: "/roast",
            query: {
                username: this.state.username
            }
        });
    }

    render() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
                <h1>Roast Meter</h1>
                <div className="col-sm-12">
                    <form onSubmit={this.onSubmitUser}>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Username"
                                   onChange={this.onUpdateUser}
                                   value={this.state.username} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-block btn-success" type="submit">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Prompt.contextTypes = {
    router: React.PropTypes.object
};

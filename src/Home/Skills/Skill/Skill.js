import React, {Component} from 'react';

export default class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            hasLink: !!props.link
        }
    }

    render() {
        return (
            <div className={"col-sm d-flex align-items-stretch"}>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>{this.state.name}</h5>
                        <p className={"card-text"}>{this.state.description}</p>
                    </div>
                </div>
            </div>
        );
    }

}
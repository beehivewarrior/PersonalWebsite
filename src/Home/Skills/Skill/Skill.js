import React, {Component} from 'react';
import "./Skill.css";

export default class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            image: props.image,
            link: props.link
        }
    }

    verifyLInk = () => {
        if (this.state.link) {
            return <a href={this.state.link} className="btn btn-primary repo-link">Learn More</a>
        }
    };

    render() {
        let a = this.verifyLInk();
        return (
            <div className={"col-sm d-flex align-items-stretch skill"}>
                <div className={"card skill"}>
                    <div className={"card-body skill"}>
                        <div className={"row skill-title"}>
                            <div className={"col-1 my-auto"}>
                                <img className={"img-fluid my-auto"} alt={""} src={this.state.image}/>
                            </div>
                            <div className={"col-11 my-auto"}>
                                <h4 className={"card-title align-self-center my-auto"}>{this.state.name}</h4>
                            </div>
                        </div>
                        <p className={"card-text"}>{this.state.description}</p>
                        {a}
                    </div>
                </div>
            </div>
        );
    }
}
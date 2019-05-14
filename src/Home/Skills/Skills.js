import React, {Component} from 'react';
import axios from 'axios'
import Skill from "./Skill/Skill";
import "./Skills.css";

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: []
        };


        axios.get('http://10.0.20.104:8000/api/v1/skills/',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => {
                this.setState({skill: response.data});
            });
    }

    makeSkills = (l: Array) => {
        console.log(this.state.skill.slice(0, 3));
        return l.map(this.skill_mapper)
    };

    skill_mapper = (skill, iteration) => {
        let a;
        if (iteration < 3) {
            a = <Skill image={skill.image} name={skill.model_name} description={skill.description} link={skill.link}
                       key={iteration}/>
        }
        return a;
    };


    render() {
        let y = this.makeSkills(this.state.skill.slice(0, 3));
        let z = this.makeSkills(this.state.skill.slice(3));
        return (
            <div className={"col"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <p className={"h2 section-header"}>my skills</p>
                    </div>
                </div>
                <div className={"row my-skills"}>
                    {y}
                </div>
                <div className={"row my-skills"}>
                    {z}
                </div>
            </div>
        )
    }

}
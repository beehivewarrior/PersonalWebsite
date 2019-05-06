import React, {Component} from 'react';
import Skill from "./Skill/Skill";
import WHOLE_LIST_OF_SKILLS from "./SKILL_LIST";
import "./Skills.css";

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: () => {
                let skill_objects = [];
                WHOLE_LIST_OF_SKILLS.forEach((o, k) => {
                        let a = {name: o, description: k};
                        skill_objects.push(a);
                    }
                );
                return skill_objects;
            },
        }
    }

    makeSkills = (l: Array) => {
        return l.map(this.skill_mapper)
    };

    skill_mapper = (skill, iteration) => {
        let a;
        if (iteration < 3) {
            a = <Skill name={skill.name} description={skill.description} key={iteration}/>
        }
        return a;
    };


    render() {
        let y = this.makeSkills(this.state.skills().slice(0, 3));
        let z = this.makeSkills(this.state.skills().slice(3));
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
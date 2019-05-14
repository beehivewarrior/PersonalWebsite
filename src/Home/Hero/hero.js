import React, {Component} from 'react';
import "./Hero.css"
import banner from "../../img/herofited.jpg"
import banner2 from "../../img/hero@0,5x.jpg"

export default class Hero extends Component {

    render() {


        return (
            <div className={"col-md-12"}>
                <div className={"row"}>
                    <img className={"img-fluid"} alt={"res"}
                         srcSet={`${banner2} 336w, ${banner} 1440w`}/>
                </div>
                <div className={"row"}>
                    <div className={"col-md-12"} id={"banner-background"}>
                        <h2 id={"banner-line"}>Hi, My Name is Jordan</h2>
                    </div>
                </div>
            </div>
        )
    }
}
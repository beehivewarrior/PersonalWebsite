import React, {Component} from 'react';
import './App.css';
import Header from '../Header/header';
import Hero from './Hero/hero'
import Skills from './Skills/Skills'
import "./Hero/Hero.css"

export default class App extends Component {
    render() {
        return (
            <div className={"App row"} id={"application"}>
                <div className={"col-12"}>
                    <div className={"row"} id={"header-row"}>
                        <Header/>
                    </div>
                    <div className={"row"} id={"hero-row"}>
                        <Hero/>
                    </div>
                    <div className={"row post-hero"}>
                        <Skills/>
                    </div>
                    <div className={"row post-hero test3"}>
                        <h3>Hell</h3>
                    </div>
                </div>
            </div>
        );
    }
}

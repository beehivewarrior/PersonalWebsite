import React, {Component} from 'react';
import './App.css';
import Header from '../Header/header';
import Hero from './Hero/hero'
import Skills from './Skills/Skills'
import Quote from './Quote/Quote';
import Footer from '../Footer/Footer';
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
                    <div className={"row post-hero"}>
                        <Quote/>
                    </div>
                    <div className={"row post-hero"}>
                        <h1>TESTIMONIALS</h1>
                    </div>
                    <div className={"row post-hero"}>
                        <h1>CLOSING</h1>
                    </div>
                    <div className={"row last-post"}>
                        <h1 className={"form"}>FORM</h1>
                    </div>
                    <div className={"row bottom-menu"}>
                        <Footer/>
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-12 copyright"}>
                            <p>Copyright © 2019 Christopher J. Bigelow. <br/> All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

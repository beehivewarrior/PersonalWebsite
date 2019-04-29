import React, {Component} from 'react';
import "./Header.css";


export default class Header extends Component {
    render() {
        return (
            <nav className={"navbar navbar-expand-lg col-sm-12"} id={"navigation"}>
                <h1 className={"navbar-brand"} href={"/"} id={"logo"}><span>C</span>hristopher <span>B</span>igelow
                </h1>
                <button className={"navbar-toggler bg-dark navbar-dark"} type="button"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}></span>
                </button>

                <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className={"navbar-nav ml-auto"}>
                        <li className={"nav-item active"}>
                            <a className={"nav-link"} href="/">Home <span
                                className={"sr-only"}>(current)</span></a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="/resume">Resume</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="/">Contact</a>
                        </li>
                    </ul>
                    <form className={"form-inline my-2 my-lg-0"}>
                        <input className={"form-control mr-sm-2"} type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className={"btn my-2 my-sm-0"} type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}
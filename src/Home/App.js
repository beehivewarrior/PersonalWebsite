import React from 'react';
import './App.css';
import Header from '../Header/header';
import Hero from './Hero/hero'
import "./Hero/Hero.css"

export default class App extends React.Component {
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
                    <div className={"row"} id={"text-row"}>
                        <div className={"col-6"}>
                            <h2>Para 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim varius erat,
                                at
                                accumsan tortor pretium nec. Sed quis euismod eros. Duis eget dui ipsum. In sodales
                                massa
                                nec viverra vehicula. Sed vulputate augue tincidunt nibh tristique tempus. Ut
                                ullamcorper
                                vulputate lorem quis pellentesque. Nunc dictum sagittis elementum. Cras a imperdiet
                                elit, ac
                                porttitor purus. Nam commodo facilisis dictum.<br/>
                                <br/>
                                Quisque nec metus dui. Ut dapibus ultricies justo, in ornare ligula tristique et.
                                Integer
                                diam quam, placerat id varius eget, tristique pretium urna. Nam euismod mollis tellus,
                                sed
                                fringilla purus dignissim quis. Donec consectetur lorem quis quam rutrum, ac eleifend
                                tortor
                                tristique. Nam scelerisque tellus non dui euismod mattis. Donec neque leo, faucibus a
                                arcu
                                non, ullamcorper feugiat mi. Donec pharetra, justo ut egestas mollis, urna est laoreet
                                lacus, ultricies malesuada lorem nibh quis est. Proin porta sem sed ipsum elementum
                                ultricies. Donec ut suscipit nisl, in vehicula lectus. Vivamus semper ullamcorper nisi
                                in
                                placerat. Nam quis mi in erat fermentum tristique. Etiam turpis urna, consectetur id
                                enim
                                in, viverra dignissim neque. Suspendisse dui nulla, euismod eget pretium vitae, mollis
                                id
                                dolor. Integer sit amet nunc nec mi porttitor vehicula. Praesent tristique malesuada
                                massa
                                quis condimentum.</p>
                        </div>
                        <div className={"col-6"}>
                            <h2>Para 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim varius erat,
                                at
                                accumsan tortor pretium nec. Sed quis euismod eros. Duis eget dui ipsum. In sodales
                                massa
                                nec viverra vehicula. Sed vulputate augue tincidunt nibh tristique tempus. Ut
                                ullamcorper
                                vulputate lorem quis pellentesque. Nunc dictum sagittis elementum. Cras a imperdiet
                                elit, ac
                                porttitor purus. Nam commodo facilisis dictum.<br/>
                                <br/>
                                Quisque nec metus dui. Ut dapibus ultricies justo, in ornare ligula tristique et.
                                Integer
                                diam quam, placerat id varius eget, tristique pretium urna. Nam euismod mollis tellus,
                                sed
                                fringilla purus dignissim quis. Donec consectetur lorem quis quam rutrum, ac eleifend
                                tortor
                                tristique. Nam scelerisque tellus non dui euismod mattis. Donec neque leo, faucibus a
                                arcu
                                non, ullamcorper feugiat mi. Donec pharetra, justo ut egestas mollis, urna est laoreet
                                lacus, ultricies malesuada lorem nibh quis est. Proin porta sem sed ipsum elementum
                                ultricies. Donec ut suscipit nisl, in vehicula lectus. Vivamus semper ullamcorper nisi
                                in
                                placerat. Nam quis mi in erat fermentum tristique. Etiam turpis urna, consectetur id
                                enim
                                in, viverra dignissim neque. Suspendisse dui nulla, euismod eget pretium vitae, mollis
                                id
                                dolor. Integer sit amet nunc nec mi porttitor vehicula. Praesent tristique malesuada
                                massa
                                quis condimentum.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

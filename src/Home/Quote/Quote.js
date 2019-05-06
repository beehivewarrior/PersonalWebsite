import React, {Component} from 'react';
// import mountain from "../../img/amthyst_top.jpg";
import "./Quote.css"

export default class Quote extends Component {
    render() {
        return (
            <div className={"col-md-12 quote-banner"}>
                <div className={"row inner-banner my-auto"}>
                    <blockquote className=" col-md-12 blockquote text-center mb-auto mt-auto quote-text">
                        <p className="mb-auto mt-auto">"there is nothing impossible to him who will try"</p>
                        <footer className="blockquote-footer source">Alexander the Great</footer>
                    </blockquote>
                </div>
            </div>
        )
    }
}
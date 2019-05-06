import React, {Component} from 'react';
import "./Footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div className={"col-12"}>
                <div className={"row"}>
                    <div className={"col-1"}></div>
                    <div className={"col-10"}>
                        <div className={"row pt-auto"}>
                            <div className={"col-md-3"}>
                                <p className={"logo-small"}><span>C</span>hristopher <span>B</span>igelow</p>
                                <p className={"mission"}>Fusce interdum ipsum egestas urna amet fringilla, et placerat
                                    ex venenatis. Aliquet luctus pharetra. Proin sed fringilla lectus... ar sit amet
                                    tellus in mollis.</p>
                            </div>
                            <div className={"col-md-3 foot-menu-section "}>
                                <p className={"foot-menu-subheader"}>Other Pages</p>
                            </div>
                            <div className={"col-md-3 foot-menu-section"}>
                                <p className={"foot-menu-subheader"}>Recent Blog Posts</p>
                            </div>
                            <div className={"col-md-3 foot-menu-section"}>
                                <p className={"foot-menu-subheader"}>LinkedIn Feed</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-1"}></div>
                </div>
            </div>
        );
    }
}
import React, { Component } from "react";
import "./Button.css";

/**
 * @property {String} type ["normal", "dark", "accent"]
 * 
 */
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props) // Para mostrar las propiedades.
    }
    render() {
        const { type } = this.props;
        let className = "calc-button";
        switch (tyoe) {
            case "dark":
                className += "dark-btn"
                break;
            case "accent":
                className += "accent-btn"
            default:
                break;
        }
        return (
            <div>

                <button onClick={...this.props} className={className}>
                    {children}
                </button>
            </div>
        );
    }
}
export default Button;
import React from "react";

export class ListItem extends React.Component {
    render() {
        return <li className = {this.props.className}>{ this.props.word }</li>;
    }
}
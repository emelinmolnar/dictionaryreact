import React from 'react';

export class Button extends React.Component {
    render() {
        return <button id={this.props.id} className = {this.props.className} onClick={this.props.onClick}>{this.props.name}</button>;
    }
}


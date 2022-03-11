import React from 'react';


export class Input extends React.Component {
    render() {
        return <input className = {this.props.className} type="value" name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} onClick = {this.props.onClick}/>;
    }
}
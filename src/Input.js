import React from 'react';



const Input = props => {
    return <input className = {props.className} type="value" name={props.name} id={props.id} placeholder={props.placeholder} onClick = {props.onClick}/>;
} 


// export class Input extends React.Component {
//     render() {
//         return <input className = {this.props.className} type="value" name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} onClick = {this.props.onClick}/>;
//     }
// }

export default Input;
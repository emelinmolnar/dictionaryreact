import React from "react";


const ListItem = props => {
    return <li className = {props.className}>{props.word}</li>;
}


// export class ListItem extends React.Component {
//     render() {
//         return <li className = {this.props.className}>{ this.props.word }</li>;
//     }
// }

export default ListItem;
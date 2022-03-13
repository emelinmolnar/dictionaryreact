import React from "react";
import ListItem from './listItem';

const UnorderedList = props => {
    return <ul id={props.id} className = {props.className}>
            {props.words.map(word => <ListItem word={word} key={word}/>)}
        </ul>;
}

// export class UnorderedList extends React.Component {
//     render() {
//         return <ul id={this.props.id} className = {this.props.className}>
//             {this.props.words.map(word => <ListItem word={word} key={word}/>)}
//         </ul>;
//     }
// }

export default UnorderedList;
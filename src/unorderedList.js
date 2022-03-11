import React from "react";
import { ListItem } from './listItem';

export class UnorderedList extends React.Component {
    render() {
        return <ul id={this.props.id} className = {this.props.className}>
            {this.props.words.map(word => <ListItem word={word} key={word}/>)}
        </ul>;
    }
}
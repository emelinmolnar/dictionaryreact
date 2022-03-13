import React from 'react';

const Instructions = props => {
    return (<div className = {props.className} id={props.id}>
        <h1>Enter a word in the box in order to add it on a list, then you can search a word in order to see if it's been added to the list
        </h1> 
    </div>);
}

// export class Instructions extends React.Component {
//     render() {
//         return (<div className = {this.props.className} id={this.props.id}>
//                     <h1>Enter a word in the box in order to add it on a list, then you can search a word in order to see if it's been added to the list
//                     </h1> 
//                 </div>);
//     }
// }

export default Instructions;
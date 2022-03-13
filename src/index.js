import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './Input';
import Instructions from './Instructions';
import Button from './Button';
import UnorderedList from './unorderedList';

function App () {

  const [words, setWords] = useState(() => {
    return [];
  });

  const [existArray, setExistArray] = useState(() => {
    return [];
  });

  
  function handleSearchClick() {
    const word = document.getElementById('searchWordInput').value;
    const exists = words.some(item => item == word);
    let phrase;
    if (exists) {
      phrase = `The word ${word} exists in the array`;
    } else {
      phrase = `The word ${word} doesn't exist in the array`;
    }
    let emptyPhraseArray = [];
    emptyPhraseArray.push(phrase);
    setExistArray(emptyPhraseArray);
    document.getElementById('searchWordInput').value = '';
  }


  function handleAddClick() {
    const word = document.getElementById('addWordInput').value;
    setWords(prevWords => [...prevWords, word]);
    document.getElementById('addWordInput').value = '';
  }

  function deleteSearched() {
    setExistArray([]);
  }

  return (
    <div>
      <Instructions id="instructionHeader"/>
      <div className="inputAndButtonDiv">
        <div className="addInputAndButtonDiv">
          <Input name="addWordInput" placeholder="Add Word" id="addWordInput" onClick={deleteSearched}/>
          <Button name = "Add Button" onClick={handleAddClick}/>
          <UnorderedList words={words}/>
        </div>
        <div className="searchInputAndButtonDiv">
          <Input name="searchWordInput" placeholder="Search for Word" id="searchWordInput" />
          <Button name = "Search Button" onClick={handleSearchClick}/>
          <UnorderedList words={existArray} />
        </div>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddClick = this.handleAddClick.bind(this);
//     this.handleSearchClick = this.handleSearchClick.bind(this);
//     this.deleteSearched = this.deleteSearched.bind(this);
//     this.state = { words: [], existArray: []};
//   }

//   handleSearchClick() {
//     const word = document.getElementById('searchWordInput').value;
//     const exists = this.state.words.some(item => item == word);
//     let phrase;
//     if(exists) {
//       phrase = `The word ${word} exists in the array`;
//     } else {
//       phrase = `The word ${word} doesn't exist in the array`;
//     }
//     let emptyPhraseArray = [];
//     emptyPhraseArray.push(phrase);
//     this.setState({
//       existArray: emptyPhraseArray
//     });
//     document.getElementById('searchWordInput').value = '';
//   }
  
//   handleAddClick() {
//     let word = document.getElementById('addWordInput').value;
//     let wordsCopy = this.state.words;
//     wordsCopy.push(word);
//     let newWords = wordsCopy;
//     this.setState({
//       words: newWords
//     });
//     document.getElementById('addWordInput').value = '';
//   }
  
//   deleteSearched() {
//     this.setState({
//       existArray: []
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Instructions id="instructionHeader"/>
//         <div className="inputAndButtonDiv">
//           <div className="addInputAndButtonDiv">
//             <Input name="addWordInput" placeholder="Add Word" id="addWordInput" onClick={this.deleteSearched}/>
//             <Button name = "Add Button" onClick={this.handleAddClick}/>
//             <UnorderedList words={this.state.words}/>
//           </div>
//           <div className="searchInputAndButtonDiv">
//             <Input name="searchWordInput" placeholder="Search for Word" id="searchWordInput" />
//             <Button name = "Search Button" onClick={this.handleSearchClick}/>
//             <UnorderedList words={this.state.existArray} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
ReactDOM.render(<App />, document.getElementById('root'));



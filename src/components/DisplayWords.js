import React from 'react';

const displayWordsStyle = {
    width: '95%',
    padding: '1rem',
    background: 'rgba(31, 57, 64, 0.68)',
    boxShadow: '0px 2px 4px 0px rgba(243, 243, 243, 0)', /* Set the desired fixed width */
    margin: '1.35rem auto', /* Center the card horizontally */
    borderRadius: '0.5rem',
    textAlign: 'justified',
    transformOrigin: 'center',
};

const typedCurrentlyStyle = {
    color: "green",
    fontSize: "1.2rem",
    fontWeight: "bold"
}

const currentStyle = {
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "bold"
}
const wordsToBeTypedStyle = {
    color: "grey",
    fontSize: "1.2rem",
    fontWeight: "bold"
}
const getTypedWords = (words, player) => {
    let typedWords = words.slice(0,player.currentWordIndex);
    typedWords = typedWords.join(" ");
    return <span style ={typedCurrentlyStyle}>{typedWords} </span>
}
const getCurrentWord = (words, player) => {
    return <span style={currentStyle}>{words[player.currentWordIndex]}</span>
}
const getWordsToBeTyped = (words, player) => {
    let wordsToBeTyped = words.slice(player.currentWordIndex+1,words.length);
    wordsToBeTyped = wordsToBeTyped.join(" ");
    return <span style={wordsToBeTypedStyle}> {wordsToBeTyped}</span>
}

const DisplayWords = ({ words, player }) => {
    return (
        <>
        <div style={displayWordsStyle}>
        {getTypedWords(words,player)}
        {getCurrentWord(words,player)}
        {getWordsToBeTyped(words,player)}
        </div>
        </>
    )
}

export default DisplayWords;
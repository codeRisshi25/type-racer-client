import React from 'react';

const typedCurrentlyStyle = {
    color: "green",
    fontSize: "1.5rem",
    fontWeight: "bold"
}

const currentStyle = {
    color: "grey",
    fontSize: "1.5rem",
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
    return <span> {wordsToBeTyped}</span>
}

const DisplayWords = ({ words, player }) => {
    return (
        <>
        {getTypedWords(words,player)}
        {getCurrentWord(words,player)}
        {getWordsToBeTyped(words,player)}
        </>
    )
}

export default DisplayWords;
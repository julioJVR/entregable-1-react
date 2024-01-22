import React from 'react';
import phrases from '../utils/phrases.json'
import randomIndex from '../services/randomIndex';
import bgArray from '../utils/bgArray.json';

const ButtonPhrases = ({setQuote, setBgApp}) => {

    const handleButton = () => {
        const bgImg = randomIndex(bgArray);
        const sentence = randomIndex(phrases);
        setQuote(sentence);
        setBgApp(bgImg);
    }

  return (
    <button onClick={handleButton}>Probar mi suerte</button>
  )
}

export default ButtonPhrases;
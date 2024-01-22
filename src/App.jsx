
import './App.css';
import RandomPrase from './componets/RandomPrase';
import phrases from './utils/phrases.json';
import randomIndex from './services/randomIndex.js';
import { useState } from 'react';
import ButtonPhrases from './componets/ButtonPhrases.jsx';
import bgArray from './utils/bgArray.json';

function App() {

  const sentence = randomIndex(phrases);
  const bgIndex = randomIndex(bgArray);

  const [quote, setQuote] = useState(sentence);
  const [bgApp, setBgApp] = useState(bgIndex);

  const bgStyle = {
    backgroundImage: `url('../assets/fondo${bgApp}.png')`,
  }
  
  return (
    <div className='app' style={bgStyle}>
      <div className='container'>
        <h1>Galletas de la fortuna</h1>
        <ButtonPhrases 
            setQuote={setQuote}
            setBgApp={setBgApp}
        />
        <RandomPrase
          quote = {quote} 
        />
      </div>
    </div>  
  )
}

export default App;

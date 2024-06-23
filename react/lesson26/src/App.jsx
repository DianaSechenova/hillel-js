import { useState, useEffect } from 'react';

import Head from "./components/Head.jsx";
import ButtonResult from './components/ButtonResult.jsx';
import ResultContent from './components/ResultContent.jsx';
import ClearResults from './components/ClearResults.jsx'
import devil from "./assets/devil.png";
import emoji from "./assets/emoji.png";
import happiness from "./assets/happiness.png";
import happySun from "./assets/happy-sun.png";
import smile from "./assets/smile.png";

function App () {
  const [showResult, setShowResult] = useState(false);
  const [counts, setCounts] = useState(JSON.parse(localStorage.getItem('iconCounts')) || {
    devil: 0,
    emoji: 0,
    happiness: 0,
    happySun: 0,
    smile: 0
  });
  const images = {
    devil: devil,
    emoji: emoji,
    happiness: happiness,
    happySun: happySun,
    smile: smile
  };

  const handleToggleResult = () => {
    setShowResult(showResult => !showResult);
  };

  const handleClearResult = () => {
    localStorage.clear();
    setCounts({
      devil: 0,
      emoji: 0,
      happiness: 0,
      happySun: 0,
      smile: 0
    });
    setShowResult(false);
  };

  useEffect(() => {
    localStorage.setItem('iconCounts', JSON.stringify(counts));
  }, [counts]);


  const handleClick = (key) => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [key]: prevCounts[key] + 1
    }));
  };

  return (
    <div className='container d-flex flex-column align-items-center'>
      <Head />
      <>
        <ul className="d-flex justify-content-center gap-2">
          {Object.keys(images).map(key => (
            <li key={key} className="d-flex align-items-end">
              <button className="btn btn-link" onClick={() => handleClick(key)}>
              <img className="icon" src={images[key]} alt={key} />
                </button>
            <span className="fs-1 text">{counts[key]}</span>
            </li>
          ))}
        </ul>
      </>  
      <div className="d-flex gap-2">
        <ButtonResult handleToggleResult={handleToggleResult} />
        <ClearResults handleClearResult={handleClearResult} />
      </div>
      {showResult && <ResultContent clickCounts={counts} />} 
    </div>
  );
}

export default App;

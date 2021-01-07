import React, {Fragment,useState, useEffect} from 'react';
//import ReactPlayer from 'react-player';
import './globals.css';
import Header from './header.js';
import Sectioncard from './section-card.js';
import Overview from './overview.js';
import Switch from './switch.js';

function App() {
  const [darkMode, setdarkMode] = useState(false)
  const [checked, setchecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq){
    setdarkMode(mq.matches)
    setchecked(mq.matches)
}

useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addListener(changeMedia)
    setdarkMode(mq.matches)
    setchecked(mq.matches)
},[])

  return (
    <main className={mainClass}>         
      <Fragment>
      <Header>
        <Switch 
          setdarkMode={setdarkMode} 
          cheked={checked} 
          setchecked={setchecked}
        />
      </Header>
      <Sectioncard/>
      <Overview/>
      </Fragment>
    </main>
  )
}

export default App;

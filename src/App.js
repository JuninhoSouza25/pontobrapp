import React, { useState } from "react";
import Card from "./components/card";
import List from './components/list';
import Logo from "./components/logo";
import DATA from './data';

function App() {
  const [list, setList] = useState(true);
  const [card, setCard] = useState(false);
  const [song, setSong] = useState();

  function handleList(event){
    setList(false);
    setCard(true);
    let index = parseInt(event.target.id)
    setSong(DATA[index - 1])
  }

  function handleBack() {
    setList(true);
    setCard(false)
  }

  return (
    <div className="App">
      <>
        <Logo />
        {list && (<List onClick={handleList} DATA={DATA}/>)}

        {card && (<Card onClick={handleBack} DATA={song}/>)}
      </>
    </div>
  );
}

export default App;

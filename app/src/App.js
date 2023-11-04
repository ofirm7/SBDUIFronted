//.css
import './App.css';

//.js
import SureBet from './Components/SureBetComponent/SureBet';

//packages
import React, {useState, useEffect} from 'react';
import axios from 'axios';

//End of imports

//Consts
const FASTAPI_ADDRESS = "http://192.168.1.39:8000/SureBets"
const teamsSeparator = 'vs'
const gameTitleCharsReplacements = {
  _X_:'',
  X_: '',
  _X: '',
  X: '',
  _: ' vs ',
}
const charsToReplace = ['_X_', 'X_', '_X', 'X', '_']
const profitPrecision = 3
//End of consts

//Functions
const ConvertGameTitle = (gameTitle) => {
  charsToReplace.forEach(
      char => {gameTitle = gameTitle.replace(char, gameTitleCharsReplacements[char])}
  )
  let convertedGameTitle = gameTitle
  return convertedGameTitle
}

//End of functions

function App() {
  const [sureBets, setSureBets] = useState()

  useEffect (() => {
    axios.get(FASTAPI_ADDRESS)
      .then(response => setSureBets(response.data))
  }, []);
  
  return (
    <div className="App">
      <h1 className="App-header">Sure Bets Discover</h1>
      <div className='SureBetsContainer'>
        {sureBets != null && sureBets.length > 0 ? (
          sureBets.map(item => (
            <SureBet
              GameTitle={ConvertGameTitle(item._SureBet__game)}
              Profit={(parseFloat(item._SureBet__profit) / 1000 * 100).toFixed(profitPrecision)}
              Choices={item._SureBet__choices}/>
          ))
        ) : (
          <p className='noSureBetsAvailable'>No Sure Bets Available</p>
        )}
      </div>
    </div>
  );
}

export default App;

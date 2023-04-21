import React from 'react';

export default function Header(props) {
  const [result, setResult] = React.useState([]);
  const [filteredResult, setFilteredResult] = React.useState([]);


  return (
    <div data-testid="header" className='header'>
      <div className="left-side">
        <input type="search" 
          placeholder="Search" 
          className="search" 
          onChange={props.handleInputChange}
        />
      </div>


      <div className="shinymode">
        <h6 style={{color: props.shiny ? '#a6a6a6' : 'black'}}>NORMAL</h6>
        <label className="switch">
          <input data-testid="switchButton" type="checkbox" onClick={props.changeMode} />
          <span className="slider round"></span>
        </label>
        <h6 style={{color: props.shiny ? 'black' : '#a6a6a6'}}>SHINY</h6>
      </div>

    </div>
  );
}

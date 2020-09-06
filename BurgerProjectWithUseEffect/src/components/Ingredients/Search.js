import React, { useState } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [searchState, setSearchState]= useState('');

  const inputChangeHandler = (value) =>{
    console.log(searchState);
    setSearchState(value);
    console.log(searchState);
    props.searchConfirm(value);
  }

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={(event)=> inputChangeHandler(event.target.value)}/>
          <button onClick={()=>props.searchConfirm(searchState)}>Confirm</button>
        </div>
      </Card>
    </section>
  );
});

export default Search;

import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [inputText,setInputText] = useState('');
  const [results,setResults] = useState(null);
  const [searchOption,setSearchOption]  = useState('shows');

  const isSearchShows = searchOption === 'shows'

  const onInputChange = e => {
    
    setInputText(e.target.value);
  }

  const onSearch = () =>{
    //https://api.tvmaze.com/search/shows?q=girls
    fetch(`https://api.tvmaze.com/search/${searchOption}?q=${inputText}`)
    .then(r => r.json())
    .then(response =>
      setResults(response)
      )
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSearch();
    }
  }

  const renderResults = () => {

    console.log(results)
    if(results && results.length === 0){
      return <div>No results found</div>
    }
    if(results && results.length > 0){
      return results[0].show ? results.map((result) => (
        <div key={result.show.id}>{result.show.name}</div>
      )) : results.map((result) => (
        <div key={result.person.id}>{result.person.name}</div>
      ));
    }

    return null;
  }

  const onRadioChange = (e) => {
    setSearchOption(e.target.value)
    console.log(e.target.value)
  }

  return (
    <MainPageLayout>
      <input placeholder='Search for something' type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={inputText}/>

      <div>

        <label htmlFor='show-search'>
          Shows
          <input id='show-search' type="radio" value="shows" onChange ={onRadioChange} checked={isSearchShows}></input>
        </label>

        <label htmlFor='actors-search'>
          Actors
          <input id='actors-search' type="radio" value="people" onChange ={onRadioChange} checked={!isSearchShows}></input>
        </label>

      </div>


      <button type="button" onClick={onSearch}>Search</button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home

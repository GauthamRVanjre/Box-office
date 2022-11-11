import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [inputText,setInputText] = useState('');
  const [results,setResults] = useState(null);

  const onInputChange = e => {
    
    setInputText(e.target.value);
  }

  const onSearch = () =>{
    //https://api.tvmaze.com/search/shows?q=girls
    fetch(`https://api.tvmaze.com/search/shows?q=${inputText}`)
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
    if(results && results.length === 0){
      return <div>No results found</div>
    }
    if(results && results.length > 0){
      return <div>{
          results.map((result) => (
            <div key={result.show.id}>{result.show.name}</div>
          ))
        }</div>
    }

    return null;
  }

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={inputText}/>
      <button type="button" onClick={onSearch}>Search</button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home

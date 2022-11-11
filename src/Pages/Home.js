import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [inputText,setInputText] = useState('');

  const onInputChange = e => {
    
    setInputText(e.target.value);
  }

  const onSearch = () =>{
    //https://api.tvmaze.com/search/shows?q=girls
    fetch(`https://api.tvmaze.com/search/shows?q=${inputText}`)
    .then(r => r.json())
    .then(response => console.log(response))
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSearch();
    }
  }

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={inputText}/>
      <button type="button" onClick={onSearch}>Search</button>
    </MainPageLayout>
  )
}

export default Home

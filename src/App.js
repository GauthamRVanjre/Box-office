import React from 'react';
import {Switch,Route} from 'react-router-dom';
import MainPageLayout from './components/MainPageLayout';
import Navs from './components/Navs';
import Home from './Pages/Home';
import Show from './Pages/Show';
import Starred from './Pages/Starred';

function App() {
  return (
    
    <Switch>
        <Route exact path="/"> 
          <Home/>
        </Route>

        <Route exact path="/starred">
          <Starred/>
        </Route>

        <Route exact path="/show/:id">
          <Show/>
        </Route>
      
        <Route> This is 404 page</Route>
      </Switch>
  );
}

export default App;

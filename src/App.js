import React, { Component } from 'react';
import SearchBar from './containers/search-bar'
import WeatherList from './containers/weatherList'
import './App.css';
class App extends Component {
  render() {
    return (

        <div>
      <SearchBar/>
          <WeatherList/>
        </div>
    );
  }
}

export default App;

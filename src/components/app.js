import React, { Component } from 'react';
import '../styles/style.scss'
import SearchBar from '../containers/SearchBar';
import RateExchageList from '../containers/RateExchageList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RateExchageList />
      </div>
    );
  }
}

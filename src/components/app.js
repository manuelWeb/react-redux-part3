import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';

import '../styles/style.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

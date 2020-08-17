import React, { Component } from 'react';
import { fetchCountries } from '../actions/index'
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.props.fetchCountries()
  }
  // componentWillMount() {
  //   this.props.fetchCountries()
  // }
  renderSelectCoutries() {
    return (
      <select name="" id="">
        <option value=""></option>
      </select>
    )
  }
  render() {
    return (
      <div>
        {this.renderSelectCoutries()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCountries
}

export default connect(undefined, mapDispatchToProps)(SearchBar);
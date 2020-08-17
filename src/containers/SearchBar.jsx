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
      <select name="" id="" className="form-control-lg search_bar" >
        {this.props.countries.map(c =>
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        )}
      </select>
    )
  }
  render() {
    return (
      <form className="form-group">
        {this.renderSelectCoutries()}
      </form>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    countries: store.countryReducer.countries
  }
}

const mapDispatchToProps = {
  fetchCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
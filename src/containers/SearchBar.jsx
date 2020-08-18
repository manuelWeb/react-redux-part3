import React, { Component } from 'react';
import { fetchCountries } from '../actions/index'
import { fetchRateExchange } from '../actions/index'
import { connect } from 'react-redux';

// import lodash from 'lodash'
import find from 'lodash/find'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.props.fetchCountries()
  }

  renderSelectCoutries() {
    return (
      <select
        onChange={e => this.onChangeCountry(e)}
        name="" id="" className="form-control-lg search_bar" >
        <option value="">Please choose your country</option>
        {this.props.countries.map(c =>
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        )}
      </select>
    )
  }
  onChangeCountry(e) {
    const countryCode = e.target.value
    const country = find(this.props.countries, { code: countryCode })
    // console.log('on change', e.target.value);
    // console.log('selectedCountry: ', country);
    this.props.fetchRateExchange(country)
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
  fetchCountries,
  fetchRateExchange,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
import React, { Component } from 'react'

class RateExchangeListItem extends Component {
  render() {
    console.log(this.props.rateExchange);
    const { name, flag, rates } = this.props.rateExchange
    return (
      <tr>
        {/* <td>pays</td> */}
        <td>{name}<br /><img width="80" src={flag} alt="" /> </td>
        <td>graphique</td>
      </tr>
    )
  }
}

export default RateExchangeListItem
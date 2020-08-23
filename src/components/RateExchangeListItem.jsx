import React, { Component } from 'react'
import ReactChartkick, { AreaChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)

class RateExchangeListItem extends Component {
  render() {
    console.log(this.props.rateExchange);
    const { name, flag, rates, currencyCode } = this.props.rateExchange
    return (
      <tr>
        {/* <td>pays</td> */}
        <td>{name}<br /><img width="80" height="48" src={flag} alt="" /> </td>
        <td className="col-md-12">
          <AreaChart data={formatData(rates, currencyCode)} xtitle="Date" ytitle={currencyCode} />
        </td>
      </tr>
    )
  }
}
function formatData(rates, currencyCode) {
  return Object.keys(rates).map(date => {
    return [date, rates[date][currencyCode]]
  })
}

export default RateExchangeListItem
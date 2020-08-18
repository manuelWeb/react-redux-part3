import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_RACE_EXCHANGE = 'GET_RACE_EXCHANGE'

export function fetchCountries() {
  // dispatch is a redux-thunk @see src/index.js
  return function (dispatch) {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(axiosResponse => {
        dispatch({ type: GET_COUNTRIES, payload: axiosResponse.data })
      })
  }
}

export function fetchRateExchange(country) {
  return function (dispatch) {
    axios.get(`https://api.exchangeratesapi.io/history?start_at=${formatedDate(new Date())}&end_at=${getLastMonth()}&base=USD&symbols=${country.code}`)
      .then(axiosResponse => {
        dispatch({ type: GET_RACE_EXCHANGE, payload: { rates: axiosResponse.data.rates, ...country } })
      })
  }
}

function formatedDate(date) {
  return date.toISOString(date).split('T')[0]
}
function getLastMonth() {
  let now = new Date()
  // rm one month
  now.setMonth(now.getMonth() - 1)
  return formatedDate(now)
}
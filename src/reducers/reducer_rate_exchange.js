import { GET_RACE_EXCHANGE } from '../actions'

const initialState = {
  rateExchangeList: []
}

export default function (oldRateExchangeReducer = initialState, action) {
  switch (action.type) {
    case GET_RACE_EXCHANGE:
      return {
        ...oldRateExchangeReducer,
        rateExchangeList: [
          action.payload,
          ...oldRateExchangeReducer.rateExchangeList
        ]
      }

    default:
      return oldRateExchangeReducer
  }
}

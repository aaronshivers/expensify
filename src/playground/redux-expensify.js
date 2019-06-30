import { createStore, combineReducers } from 'redux'

const demoState = {
  expenses: [{
    id: '234jksldf77u8',
    description: 'January Rent',
    note: 'This was the final payment',
    amount: 45900,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

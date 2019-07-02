import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

console.log(store.getState())

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 250, createdAt: 1500 }))
store.dispatch(setTextFilter('water'))

setTimeout(() => {
  store.dispatch(setTextFilter('bill'))
}, 3000)

console.log(store.getState())

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

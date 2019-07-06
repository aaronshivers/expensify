import configureStore from 'redux-mock-store'
import ReduxThunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const middlewares = [ReduxThunk]
const mockStore = configureStore(middlewares)

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '1234asdf' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234asdf'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('1234asdf', { note: 'Water Bill' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234asdf',
    updates: { note: 'Water Bill' }
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2])

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', done => {
  const initialState = {}
  const store = mockStore(initialState)
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This is a nice mouse',
    createdAt: 1000
  }

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      })

      return database
        .ref(`expenses/${ actions[0].expense.id }`)
        .once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
})

test('should add expense with defaults to database and store', done => {
  const initialState = {}
  const store = mockStore(initialState)
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      })

      return database
        .ref(`expenses/${ actions[0].expense.id }`)
        .once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults)
      done()
    })
})

// test('should setup add expense action object with default values', () => {

//   const action = addExpense()

//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: '',
//       id: expect.any(String)
//     }
//   })
// })

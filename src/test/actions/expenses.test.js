import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This is last months rent'
  }

  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) }
  })
})

test('should setup add expense action object with default values', () => {

  const action = addExpense()

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  })
})

import { logout, login } from '../../actions/auth'

test('should generate logout action object', () => {
  const action = logout()

  expect(action).toEqual({
    type: 'LOGOUT'
  })
})

test('should generate login action object', () => {
  const uid = '1234'
  const action = login(uid)

  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})
